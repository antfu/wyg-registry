import { PackageInfo } from './scripts/types'

/*
  If you would like to publish your own wenyan packages,
  Please append your package infomation to the following array
  and then make a PR for your changes.

  The `name` should be in Chinese, you can add pinyin aliases to your packages

  For the `repo` field, you can set by following format:
    GitHub - `owner/name` or `github:owner/name`
    GitLab - `gitlab:owner/name`
    Bitbucket - `bitbucket:owner/name`

  If you would like specify the branch
    `owner/name#my-branch`
*/

// No version control yet

export const packages: PackageInfo[] = [
  {
    name: '简体秘术',
    repo: 'github:lymslive/wyg-packages#jiantihua',
    description: 'Cowsay for Wenyan Lang',
    author: {
      name: 'antfu',
      url: 'https://github.com/lymslive/wyg-packages',
    },
		aliases: ['jiantihua'],
  },
]
