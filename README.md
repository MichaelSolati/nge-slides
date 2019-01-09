# Angular Elements Slides

This is a sample library of Angular Elements components geared for a slideshow. Doesn't play well in Angular 2+ applications, but should work with other framworks (tested with vanilla HTML/JS and Vue).

## Downloading

Angular Elements Slides is available via NPM:

```bash
npm install nge-slides
```

Or you can use Angular Elements Slides via CDN:

```HTML
<script src="https://unpkg.com/nge-slides@0.0.0/nge-slides.js"></script>
```

## Example Usage

```HTML
<!-- Required wrapper for all slides as well as progress bar -->
<nge-slides-wrapper>
  <nge-slide-title title="Angular Element Slides" subtitle="Web Components Made Easy"></nge-slide-title>
  <nge-slide-section title="Section Slide"></nge-slide-section>
  <nge-slide title="Slide 3" content="Content can be defined via an attribute"></nge-slide>
  <nge-slide title="Slide 4">
    <p>Or you can put your content in as HTML</p>
  </nge-slide>
  <nge-slide-blank>
    <p>A blank slide has little to no properties</p>
    <p>All it's designed to be is an HTML passthrough</p>
  </nge-slide-blank>
  <nge-slide-title title="Goodbye"></nge-slide-title>
  <nge-slides-progress-bar></nge-slides-progress-bar>
</nge-slides-wrapper>
```
