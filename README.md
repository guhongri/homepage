# Hongri Richard Gu Academic Website

Static academic website for `guhongri.com`, designed for free hosting on GitHub Pages.

## Files

- `index.html` - single-page academic website.
- `styles.css` - responsive visual design.
- `script.js` - mobile navigation, active section highlighting, and publication filtering.
- `assets/media/` - profile photo and research images.
- `assets/docs/CV_Gu_Feb_2026.docx` - current CV download.
- `CNAME` - custom domain for GitHub Pages.

## Publish On GitHub Pages

1. Create a GitHub repository, for example `guhongri.github.io` or `academic-website`.
2. Upload this folder's contents to the repository root.
3. In GitHub, open `Settings` > `Pages`.
4. Set the source to `Deploy from a branch`, branch `main`, folder `/root`.
5. Keep the custom domain as `guhongri.com`.

## Point The Domain

At the domain registrar or DNS provider, use GitHub Pages DNS records:

- Apex domain `guhongri.com`: add these `A` records for `@`:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Optional IPv6: add the GitHub Pages `AAAA` records listed in the GitHub Docs.
- `www.guhongri.com`: add a `CNAME` pointing to the GitHub Pages hostname, usually `<your-github-username>.github.io`.

GitHub's Pages settings will show the exact DNS check result after the records propagate.
GitHub's current custom-domain instructions are here: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Content Notes

- Replace `assets/media/profile.jpg` to update the headshot.
- Replace `assets/docs/CV_Gu_Feb_2026.docx` when the CV changes.
- Edit the `publication-list` in `index.html` to add new papers.
