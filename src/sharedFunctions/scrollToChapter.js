export const scrollToChapter = (chapterReference) => {
  window.scrollTo(0, chapterReference.current.offsetTop);
};
//used by hamburger icon and 'my projects' button to navigate to certain chapter on the landing page
