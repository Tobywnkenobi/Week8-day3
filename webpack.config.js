const path = require('path')= {
    mode: 'development',
    entry: './src/index.ts',
    module: {
        rules: [
          {
            test:/\.ts$/,
            use: 'ts-loader',
            include: [path.resolve(__dirname, 'src')]
          }  
        ]  
    },
    resolve: {
        extensions: ['.ts']
    },
    output:{
        publicPath: 'public',
        fileName: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}