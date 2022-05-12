export const setMenuHeight = (menu: any, content: any) => {
    if (!content && !menu) return;
    const listHeight = content?.getBoundingClientRect().height;
    const menuH = listHeight && listHeight + 80;
    menu && menuH && menu.setAttribute('style', `height : ${menuH}px ; bottom : -${menuH + 3}px `);
};
