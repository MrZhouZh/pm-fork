/**
 * 初始化基本命令
 */
function programConfig() {
  programConfig
    .version(packageJson.version)
    .option('--info', 'print environment debug info')
    .allowUnknownOption()
    
}