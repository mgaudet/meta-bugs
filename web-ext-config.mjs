// Configuration for Mozilla's web-ext tool (https://github.com/mozilla/web-ext).
//
//   npx web-ext run    # launch a temporary Firefox profile with the addon
//   npx web-ext lint   # run the addons.mozilla.org linter
//   npx web-ext build  # produce web-ext-artifacts/meta_bugs-<version>.zip
//
// The ignore list mirrors the exclusions of the `nix build` in flake.nix.
export default {
  ignoreFiles: [
    "flake.nix",
    "flake.lock",
    "web-ext-config.mjs",
    "images",
    "result",
  ],
  run: {
    startUrl: ["https://bugzilla.mozilla.org/show_bug.cgi?id=SpiderMonkey"],
  },
};
