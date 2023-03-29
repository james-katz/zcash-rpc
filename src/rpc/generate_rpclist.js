// This script automates most of the work for generating
// a JSON object containing all RPC categories and calls.

const { exec, execSync } = require('child_process');
const fs = require('fs');

// Path to zcash-cli
const zcashCli = '~/zcash-5.4.2/bin/zcash-cli';

exec(zcashCli + ' help', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }

    const rpclist = stdout.split('\n');
    let rpcJson = [];
    
    let categories = rpclist.filter(el => el.startsWith('=='));
    categories.forEach((el) => {
        let item = {
            category: el.replace(/=/g,'').trim(),
            calls: []
        }
        
        for(let i = rpclist.indexOf(el) + 1; i < rpclist.indexOf('', rpclist.indexOf(el)); i ++) {
            if(rpclist[i]) { 
                const regex = /^(\S+)\s?(.*)$/;
                const rpcrgx = regex.exec(rpclist[i]);
                const rpcHelp = execSync(zcashCli + ' help ' + rpcrgx[1]).toString();
                const rpcSummary = getSummary(rpcHelp);
                const rpcDeprecated = isDeprecated(rpcHelp);

                item.calls.push({
                    name: rpcrgx[1],
                    args: rpcrgx[2],
                    summary: rpcSummary,
                    help: rpcHelp,
                    deprecated: rpcDeprecated
                });                
            }            
        }

        rpcJson.push(item)
    });
    fs.writeFileSync('rpclist.json', JSON.stringify(rpcJson));
  });

function getSummary(rpc) {
    const help = rpc.split('\n');
    const start = help.indexOf('');
    const end = help.indexOf('', start+1);
    
    let summary = ''
    for(let i = start; i < end; i ++) {
        summary += help[i];
    }
    
    return summary;
}

function isDeprecated(rpc) {
    if(rpc.includes('DEPRECATED')) return true;
    return false;
}