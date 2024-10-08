import {ModuleOptions} from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import ReactRefreshTypeScript from 'react-refresh-typescript'
import {buildBabelLoader} from "./babel/buildBabelLoader";

export function buildLoaders(options: BuildOptions):ModuleOptions['rules'] {
    const isDev = options.mode === 'development';

    const cssLoaderWithModules =  {
            loader: "css-loader",
            options: {
                modules: {
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    localIdentName: isDev ? '[path][name]_[local]__[hash:base64:5]' : '[hash:base64:8]'
                }
            },
    }

    const assetLoader =  {
            test: /\.(png|jpg|jpeg|gif|woff2|woff)$/i,
            type: 'asset/resource',
    }

    const svgrLoader =  {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true,
                        svgoConfig: {
                            plugins: [
                                {
                                    name: 'convertColors',
                                    params: {
                                        currentColor: true
                                    }
                                }
                            ]
                        }
                    }
                }
            ],
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            cssLoaderWithModules,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                }
            }
        ]
    }

    const babelLoader = buildBabelLoader(options)

    return [
        svgrLoader,
        assetLoader,
        scssLoader,
        // tsLoader
        babelLoader
    ]
}