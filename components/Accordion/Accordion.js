const addAccordionToggle = () => {
  const allSections = document.querySelectorAll('.AccordionOuterBox');

  allSections.forEach(section => {
    const title = section.querySelector('.AccordionHeader');
    const content = section.querySelector('.AccordionInnerBox');
    const arrow = section.querySelector('.DownArrow');

    title.addEventListener('click', () => {
      const isOpen = section.classList.contains('open');

      if (isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px'; // set current height

        requestAnimationFrame(() => {
          content.style.maxHeight = '0px'; // animate to closed
        });
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }

      arrow.classList.toggle('open');
      section.classList.toggle('open');
    })
  });
}