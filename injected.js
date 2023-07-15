$(function(){
    // 7/12/23 -  5:15m

    // Logo URL will have to change depending on what logo you want.
    const logo = 'https://images.squarespace-cdn.com/content/v1/64ab0064ac5f404ebdeb1421/3bae4c14-fc31-4a03-a583-a35d3bf5babe/logo.png?format=1500w'

    // These are based on the nav bar links depending on the /xxxxx.

    const PRODUCTS_NAV_ENTRY = '.header-nav-item a[href="/products"]'
    const SOLUTIONS_NAV_ENTRY = '.header-nav-item a[href="/solutions"]'
    const GET_STARTED_NAV_ENTRY = '.header-nav-item a[href="/get-started"]'

    const headerDesktop = '.header-display-desktop';
    const headerNavList = '.header-nav-list'


    /**
     * This section contains CUSTOM-CSS CLASSES.
     */
    const WRAPPER_CLASS="mega-menu-wrapper";
    const CONTAINER_CLASS = "mega-menu-container";
``
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


    /**
     * This section is to create quicker HTML elements for jQuery.
     */
    const megaMenuContainer =$("<div />", {
        "class": CONTAINER_CLASS,
    });
    const megaMenuTitle = (title)=>$("<div />", {
        "class": MENU_TITLE_CLASS,
        text:title,
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
    const megaMenuSectionTitle = ({link,title})=>$("<div />", {
        "class": MENU_SECTION_TITLE_CLASS,
    }).append(`<a href='${link}'>${title}</a>`).clone();
    const megaMenuSectionSubTitle = (subTitle)=> $("<div />", {
        "class": MENU_SECTION_SUB_TITLE_CLASS,
        text:subTitle
    }).clone();
    const megaMenuFooter = ({link,text})=> $("<div />", {
        "class": MENU_FOOTER_CLASS,
    }).append(`<a href='${link}'>${text}</a>`).clone();
    const megaMenuIcon = (className)=>$("<i />", {
        "class": className,
    }).clone();
    const button = (btnText)=>$("<div />",{
        "class":'custom-button header-nav-item',
        text:btnText,
    })



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

    // Pricing Button
    $('a[href="/pricing"]').addClass('custom-price-button')
    // Other Divs
    $(GET_STARTED_NAV_ENTRY).addClass('custom-button')
    $(PRODUCTS_NAV_ENTRY).addClass('custom-button')
    $(SOLUTIONS_NAV_ENTRY).addClass('custom-button')


    /**
     * @param props Obj - {iconClassName:string,title:string,link:string,subtitle:string}
     * @returns {*|jQuery|HTMLElement|JQuery<HTMLElement>}
     */
    const createItem = (props)=>{
        const {iconClassName,title,link,subTitle} = props
        const icon = megaMenuIcon(iconClassName);
        const column = megaMenuSectionColumn.clone();
        const sectionTitle = megaMenuSectionTitle({title,link});
        const sectionSubTitle = megaMenuSectionSubTitle(subTitle);
        const item = megaMenuSectionItem.clone().append(icon)
        column.append(sectionTitle,sectionSubTitle)
        return item.append(column)
    }
    const createPhoto = ({caption,addCustomClass}) =>{
        const box = megaMenuPhoto.clone();
        const text = megaMenuPhotoCaption(caption).clone();
        if(addCustomClass){
            box.addClass(addCustomClass)
        }
        return (megaMenuPhotoItem.clone().append(box.add(text)));
    }

    /**
     * Creates Create Products Menu
     * @param title
     * @returns {*|jQuery|HTMLElement|JQuery<HTMLElement>}
     */
    const createProductsMenu = (title)=> {
        const item1 = {
            iconClassName:'fa fa-circle-o fa-orange',
            title:'Digital Stationing',
            link:'http://www.google.com',
            subTitle:'Find your location at ease'
        }
        const item2 = {
            iconClassName:'fa fa-camera fa-green',
            title:'Documentation',
            link:'http://www.google.com',
            subTitle:'Photography the jobsite.'
        }
        const item3 = {
            iconClassName:'fa fa-comment-o fa-blue',
            title:'Communicate',
            link:'http://www.google.com',
            subTitle:'Share Progress with team.'
        }
       return megaMenuSection.clone().append(
            megaMenuTitle(title),
            createItem(item1),
            createItem(item2),
            createItem(item3),
            megaMenuFooter({text:'View All Features',link:'www.google.com'}),
        )

    }

    /**
     * Creates Solutions Menu
     * @returns {*|jQuery|HTMLElement|JQuery<HTMLElement>}
     */
    const createSolutionsMenu = ()=>{
        const wrapper = megaMenuPhotoWrapper.clone()

        const biddingPhoto = createPhoto({caption:'Bidding Phase'});
        const constructionPhoto = createPhoto({caption:'Construction Phase'});
        const closeoutPhoto = createPhoto({caption:'Closeout Phase'});
        const lastPhoto = createPhoto({caption:'Highlighted Case Studios'}).addClass('last')
        return wrapper.append(biddingPhoto,constructionPhoto,closeoutPhoto,lastPhoto)
    }

    /**
     * Creates Get Started Menu
     * @returns {{menuSection: (*|jQuery|HTMLElement|JQuery<HTMLElement>), photoSection: (*|jQuery|HTMLElement|JQuery<HTMLElement>)}}
     */
    const createGetStartedMenu = ()=>{
        const wrapper = $(`${GET_STARTED_NAV_ENTRY} .${WRAPPER_CLASS}`)
        const menuSection = megaMenuSection.clone()
        const photoSection = megaMenuSection.clone().addClass('right')
        const photoWrapper = megaMenuPhotoWrapper.clone()
        const newProjectProps ={
            iconClassName:'fa fa-plus',
            title:'Start a New Project',
            link:'http://www.google.com'
        }
        const searchProjectsProps = {
            iconClassName:'fa fa-search',
            title:'Search Projects',
            link:'http://www.google.com'
        }
        const thirtyDayTrail = {
            iconClassName:'fa fa-usd',
            title:'Start 30 Day Free Trail',
            link:'http://www.google.com'
        }
        const newProject = createItem(newProjectProps)
        const searchProjects = createItem(searchProjectsProps)
        const thirtyDayTrial =createItem(thirtyDayTrail)

        const widePhotoOne = createPhoto({addCustomClass:'wide'}).clone().addClass('m-1')
        const widePhotoTwo = createPhoto({addCustomClass:'wide'}).clone().addClass('m-1')
        const widePhotoThree = createPhoto({addCustomClass:'wide'}).clone().addClass('m-1')
        const title = megaMenuTitle('Videos and Tutorials').addClass('title-1')

        photoWrapper.append(widePhotoOne,widePhotoTwo,widePhotoThree)
        menuSection.append(newProject,searchProjects,thirtyDayTrial)
        photoSection.append(title,photoWrapper);


        return {menuSection,photoSection}
    }

    const wrapper = `<div class="${WRAPPER_CLASS}"></div>`
    const productsContainer = megaMenuContainer.clone().append(createProductsMenu('Mobile App'),createProductsMenu('User Management'),createProductsMenu('Data Portal').addClass('last'))

    /**
     * Function to remove the main mega-menu wrapper
     */
    const removeWrapper=()=>{
        if($(`${headerDesktop} .${WRAPPER_CLASS}`).length){
            $(`${headerDesktop} .${WRAPPER_CLASS}`).remove()
        }
    }

    /**
     * Function for the products hover listener.
     */
    const productsHover = ()=>{
        $(PRODUCTS_NAV_ENTRY).on("mouseover",  ()=> {
            removeWrapper()
            $(headerDesktop).append(wrapper)
            $(`${headerDesktop} .${WRAPPER_CLASS}`).append(productsContainer)
        }).on("mouseleave",()=>{
            $(`.${WRAPPER_CLASS}`).on("mouseleave",()=>{
                removeWrapper()
            })
        })
    }
    /**
     * Function for the solutions hover listener.
     */

    const solutionsHover = ()=>{

        $(SOLUTIONS_NAV_ENTRY).on("mouseover",  ()=> {
            removeWrapper()
            $(headerDesktop).append(wrapper)
            $(`${headerDesktop} .${WRAPPER_CLASS}`).addClass('column').append(megaMenuPhotoTitle,createSolutionsMenu())

        })
            .on("mouseleave",()=>{
            $(`.${WRAPPER_CLASS}`).on("mouseleave",()=>{
                removeWrapper()
            })
        })
    }
    const {menuSection,photoSection} = createGetStartedMenu();

    /**
     * Function to listen for the getStartedHover
     */
    const getStartedHover = ()=>{

        $(GET_STARTED_NAV_ENTRY).on("mouseover",  ()=> {
            removeWrapper()
            $(headerDesktop).append(wrapper)
            $(`${headerDesktop} .${WRAPPER_CLASS}`).append(menuSection,photoSection)
        }).on("mouseleave",()=>{
            $(`.${WRAPPER_CLASS}`).on("mouseleave",()=>{
                // removeWrapper()
            })
        })
    }


    /**
     * Remove title text and remove squarespace 'folder' menus
     * Due to some squaresace wonkyness, You have to add the class of remove, then select that class to remove.
     * Don't ask me why.
     */
    $('.header-title').addClass("remove")
    $('.remove').remove();
    $('.header-nav-folder-content').remove();

    // Make Menus on Hover
    productsHover();
    solutionsHover();
    getStartedHover();

    // Create logo
    const img = $(`<img id="logo" src=${logo}/>`)
    $(headerNavList).prepend(img)
    // Add Contact Us Button
    $(headerNavList).append(button('Contact Us').addClass('contact'))
    // Add Login Button
    $(headerNavList).append(button('Login').addClass('login'))
});