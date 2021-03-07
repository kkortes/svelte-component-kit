import { readFileSync, writeFileSync, existsSync } from 'fs';

const PACKAGES = JSON.parse(readFileSync('scripts/swap-instructions.json'));

const { NODE_ENV } = process.env;

if (!NODE_ENV || NODE_ENV === 'development') {
  let json = JSON.parse(readFileSync('package.json'))
  
  Object.entries(PACKAGES).forEach(([packageName, packagePath]) => {    
    if (packagePath.includes('file:') && !existsSync(packagePath.replace('file:', ''))) {
      console.log(`\x1b[0m${packageName}`, ':', '\x1b[33mlocal package is missing from file system\x1b[0m')
      return
    };
    
    if (json.dependencies[packageName]) {
      console.log(packageName, ':', `\x1b[31m${json.dependencies[packageName]}`, `\x1b[0m→`, `\x1b[32m${packagePath}`)
      
      
      writeFileSync('scripts/swap-instructions.json', JSON.stringify({...PACKAGES, [packageName]: json.dependencies[packageName]}, null, 2))

      json.dependencies[packageName] = packagePath;
    } else {
      console.log(`\x1b[0m${packageName}`, ':', '\x1b[33misn\'t a dependency in package.json\x1b[0m')
    }
  });
  
  writeFileSync('package.json', JSON.stringify(json, null, 2))
}
