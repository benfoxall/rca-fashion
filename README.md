# RCA Fashion MA 2017

Full Source - https://github.com/benfoxall/rca-fashion

### Commands

```bash
# generate asset thumbnails
mogrify -path student_assets_resized -resize 256x256 student_assets/*

# build js
npm install
npm install -g npx
npx webpack --watch

# build site for production (note, build destination outside project)
npx webpack -p
jekyll build --baseurl /2017 -d ~/rca-2017
```
