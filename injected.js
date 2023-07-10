$(function(){
    // IF YOU CHANGE THE PAGES ON SQUARE SPACE, YOU MUST CHANGE THESE

    const productsHeader = '.header-display-desktop [href="/products"] + .header-nav-folder-content'
    const solutionsHeader = '.header-display-desktop [href="/solutions"] + .header-nav-folder-content'
    const getStartedHeader = '.header-display-desktop [href="/get-started"] + .header-nav-folder-content'
    const test = '.header-display-desktop  + .header-nav-wrapper'



    // 7/10/23 -  3:23
    const WRAPPER_CLASS="mega-menu-wrapper";
    const CONTAINER_CLASS = "mega-menu-container";

    const MENU_TITLE_CLASS = "mega-menu-title";
    const MENU_SECTION_CLASS = "mega-menu-section";
    const MENU_SECTION_ITEM_CLASS = "mega-menu-section-item";
    const MENU_SECTION_COLUMN_CLASS = "mega-menu-section-column";
    const MENU_SECTION_TITLE_CLASS = "mega-menu-sub-section-title";
    const MENU_SECTION_SUB_TITLE_CLASS = "mega-menu-sub-section-sub-title"
    const MENU_FOOTER_CLASS = "mega-menu-footer"
    const MENU_FOOTER_TEXT = "mega-menu-footer-text"

    const MEGA_MENU_PHOTO_WRAPPER = "mega-menu-photo-wrapper"
    const MEGA_MENU_PHOTO_TITLE = "mega-menu-photo-title"
    const MEGA_MENU_PHOTO_ITEM = "mega-menu-photo-item"
    const MEGA_MENU_PHOTO =  "mega-menu-photo"
    const MEGA_MENU_PHOTO_CAPTION = "mega-menu-photo-caption"




    const megaMenuWrapper = $("<div />", {
        "class": WRAPPER_CLASS,
    });
    const megaMenuContainer =$("<div />", {
        "class": CONTAINER_CLASS,
    });
    const megaMenuTitle = (title)=>$("<div />", {
        "class": MENU_TITLE_CLASS,
        text:title
    }).clone();
    const megaMenuSection = $("<div />", {
        "class": MENU_SECTION_CLASS,
    });
    const megaMenuSectionItem = $("<div />", {
        "class": MENU_SECTION_ITEM_CLASS,
    });
    const megaMenuSectionColumn = $("<div />", {
        "class": MENU_SECTION_COLUMN_CLASS,
    });
    const megaMenuSectionTitle = (title)=>$("<div />", {
        "class": MENU_SECTION_TITLE_CLASS,
        text:title
    }).clone();
    const megaMenuSectionSubTitle = (subTitle)=> $("<div />", {
        "class": MENU_SECTION_SUB_TITLE_CLASS,
        text:subTitle
    }).clone();
    const megaMenuFooter = $("<div />", {
        "class": MENU_FOOTER_CLASS,
    }).clone();
    const megaMenuIcon = (className)=>$("<i />", {
        "class": className,
    }).clone();

    const footerText = $("<p/>", {
        "class": `${MENU_FOOTER_TEXT}`,
        text:"View All Features"
    }).clone();

// Solutions
    const megaMenuPhotoItem = $("<div/>",{
        "class":`${MEGA_MENU_PHOTO_ITEM}`
    })
    const megaMenuPhoto = $("<div/>",{
        "class":`${MEGA_MENU_PHOTO}`
    })
    const megaMenuPhotoCaption = (text)=> $("<div/>",{
        "class":`${MEGA_MENU_PHOTO_CAPTION}`,
        text:text
    });
    const megaMenuPhotoWrapper = $("<div/>",{
        "class":`${MEGA_MENU_PHOTO_WRAPPER}`
    })

    const megaMenuPhotoTitle = $("<p/>", {
        "class": `${MEGA_MENU_PHOTO_TITLE}`,
        text:"Digital Solutions During"
    }).clone();

    const createItem = (iconClassName,title,subTitle)=>{
        const icon = megaMenuIcon(iconClassName);
        const column = megaMenuSectionColumn.clone();
        const sectionTitle = megaMenuSectionTitle(title);
        const sectionSubTitle = megaMenuSectionSubTitle(subTitle);
        const item = megaMenuSectionItem.clone().append(icon)
        column.append(sectionTitle,sectionSubTitle)
        return item.append(column)
    }
    const createPhoto = (title) =>{
        const box = megaMenuPhoto.clone();
        const text = megaMenuPhotoCaption(title).clone();
        return (megaMenuPhotoItem.clone().append(box.add(text)));
    }
    const createProductsMenu = (title)=> {
       return megaMenuSection.clone().append(
            megaMenuTitle(title),
            createItem('fa fa-circle-o','Digital Stationing','Find your location at ease.'),
            createItem('fa fa-camera','Documentation','Photography the jobsite.'),
            createItem('fa fa-comment-o','Communicate','Share Progress with team.'),
            megaMenuFooter.append(footerText).clone()
        )

    }


    const createSolutionsMenu = ()=>{
        const wrapper = megaMenuPhotoWrapper.clone()

        const biddingPhoto = createPhoto('Bidding Phase');
        const constructionPhoto = createPhoto('Construction Phase');
        const closeoutPhoto = createPhoto('Closeout Phase');
        const lastPhoto = createPhoto('Highlighted Case Studios').addClass('last')
        return wrapper.append(biddingPhoto,constructionPhoto,closeoutPhoto,lastPhoto)
    }

    const createGetStartedMenu = ()=>{
        const wrapper = $(`${getStartedHeader} .${WRAPPER_CLASS}`)
        const menuSection = megaMenuSection.clone()
        const photoSection = megaMenuSection.clone()
        const photoWrapper = megaMenuPhotoWrapper.clone()
        const newProject = createItem('fa fa-plus','Start a New Project')
        const searchProjects = createItem('fa fa-search','Search Projects')
        const thirtyDayTrial =createItem("fa fa-usd",'Start 30 Day Free Trail')

        const widePhotoOne = createPhoto().addClass('wide').clone()
        const widePhotoTwo = createPhoto().addClass('wide').clone()
        const widePhotoThree = createPhoto().addClass('wide').clone()
        const title = megaMenuTitle('Videos and Tutorials')

        photoWrapper.append(widePhotoOne,widePhotoTwo,widePhotoThree)
        menuSection.append(newProject,searchProjects,thirtyDayTrial)
        photoSection.append(title,photoWrapper);


        return {menuSection,photoSection}
    }

    const wrapper = `<div class="${WRAPPER_CLASS}"></div>`
    const productsContainer = megaMenuContainer.clone().append(createProductsMenu('Mobile App'),createProductsMenu('User Management'),createProductsMenu('Data Portal'))

    $(`${productsHeader}` ).append(wrapper)
    $(`${productsHeader} .${WRAPPER_CLASS}`).append(productsContainer)


    $(`${solutionsHeader}`).append(wrapper)
    $(`${solutionsHeader} .${WRAPPER_CLASS}`).append(megaMenuPhotoTitle,createSolutionsMenu())

    $(`${getStartedHeader}`).append(wrapper)
    const {menuSection,photoSection} = createGetStartedMenu();
    $(`${getStartedHeader} .${WRAPPER_CLASS}`).append(menuSection,photoSection)
});