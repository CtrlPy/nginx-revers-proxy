
module.exports = {
    "branches": ["main", "next"],
    "plugins": [
        [
            "@semantic-release/commit-analyzer"
        ],
        [
            "@semantic-release/exec",
            {
                "prepareCmd": "scripts/prepare.sh ${nextRelease.version}",
            }
        ],

        [
            "@semantic-release/release-notes-generator"
        ],
        [
            "@semantic-release/github"
        ]
    ]
}

