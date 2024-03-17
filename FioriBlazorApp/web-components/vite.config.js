export default {
    build: {
        rollupOptions: {
            output: {
                manualChunks: false,
                inlineDynamicImports: true,
                entryFileNames: '[name].js',   // currently does not work for the legacy bundle
                //assetFileNames: 'assets//[name].[ext]', // currently does not work for images
            },
        }
    }
    
}
