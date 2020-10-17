import { exec, execSync } from 'child_process';
import * as fs from 'fs';

const main = () => {
  const codeSpace = process.env.CODE_SPACE;

  if (!codeSpace) {
    console.error('Please set env WORK_SPACE before');
    return;
  }

  const [_exec, _file, target] = process.argv;

  const codeSpaceSuffix = '.code-workspace';

  if (target) {
    execSync(`code ${codeSpace}/${target}${codeSpaceSuffix}`);
  } else {
    fs.readdir(codeSpace, (err, files) => {
      if (err) {
        console.error(err);
      }
      console.log(files.map((file) => file.replace(codeSpaceSuffix, '') + '\t').join(''));
    });
  }
};

main();
