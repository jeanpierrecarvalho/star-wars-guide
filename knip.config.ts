import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  entry: ['src/**/*'],
  ignore: ['postcss.config.mjs', 'postcss-load-config'],
}

export default config
