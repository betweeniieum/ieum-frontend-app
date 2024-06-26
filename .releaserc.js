module.exports = {
  "branches": [
    "main"
  ],
  "repositoryUrl": "https://github.com/betweeniieum/ieum-frontend-app",
  "plugins": [
    [
      "@semantic-release/commit-analyzer",
      {
        "preset": "conventionalcommits",
        "releaseRules": [
          /**
           * @inner
           * NOTE: Commits with scope no-release will not be associated with a release type
           * even if they have a breaking change or the type 'feat', 'fix' or 'perf'
           *
           * @see
           * https://github.com/semantic-release/commit-analyzer#releaserules
           */
          {"scope": "no-release", "release": false},
          {"scope": "breaking", "release": "major"},
          {"type": "docs", "scope": "README", "release": "patch"},
          {"type": "feat", "release": "minor"},
          {"type": "fix", "release": "patch"},
          {"type": "refactor", "scope": "component", "release": "patch"},
          {"type": "refactor", "release": "patch"},
          {"type": "style", "release": "patch"},
          {"type": "perf", "release": "patch"},
          {"type": "revert", "release": "patch"},
          {"type": "move", "release": false},
          {"type": "remove", "release": false},
          {"type": "chore", "release": false},
          {"type": "ci", "release": false},
          {"type": "test", "release": false},
        ],
        "parserOpts": {
          "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES"]
        }
      }
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            /**
             * @inner
             * 아래 변화들은 보이도록 한다.
             * (presetConfig는 conventional-changelog 방식을 따른다.)
             *
             * @see
             * https://github.com/semantic-release/release-notes-generator
             * https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.0.0/README.md
             */
            { type: 'feat', section: '✨ Features', hidden: false },
            { type: 'fix', section: '🐛 Bug Fixes', hidden: false },
            { type: 'perf', section: '🌈 Performance', hidden: false },
            { type: 'refactor', section: '♻️ Refactor', hidden: false },
            { type: 'docs', section: '📝 Docs', hidden: false },
            { type: 'style', section: '💄 Styles', hidden: false },
            { type: 'revert', section: '🕐 Reverts', hidden: false },
            { type: 'ci', section: '💫 CI/CD', hidden: false },
            /**
             * @inner
             * 아래 변화들은 보이지 않게 한다.
             */
            { type: 'test', section: '✅ Tests', hidden: true },
            { type: 'chore', section: '📦 Chores', hidden: true },
            // { type: 'move', section: '🚚 Move Files', hidden: true },
            // { type: 'remove', section: '🔥 Remove Files', hidden: true },
          ],
        }
      },
    ],
    [
      "@semantic-release/npm",
      {
        "npmPublish": false
      }
    ],
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "CHANGELOG.md",
        "changelogTitle": "# CHANGELOG | 변경 사항"
      }
    ],
    [
      "@semantic-release/git",
      {
        "assets": ["CHANGELOG.md", "package.json"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ]
  ],
}
