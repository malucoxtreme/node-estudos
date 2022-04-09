const fs = require('fs')

fs.stat('arquivo.txt', (err, stats) => {
    if (err) {
        console.log(err)
        console.log(stats)
    }
    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.isSymbolicLink())
    console.log(stats.ctime)
    console.log(stats.mtime)
    console.log(stats.atime)
    console.log(stats.birthtime)
    console.log(stats.size)
    console.log(stats.mode)
    console.log(stats.nlink)
    console.log(stats.uid)
    console.log(stats.gid)
    console.log(stats.ino)
    console.log(stats.dev)
    console.log(stats.rdev)
    console.log(stats.blksize)
    console.log(stats.blocks)

  }
)  
// metodos do modulo fs