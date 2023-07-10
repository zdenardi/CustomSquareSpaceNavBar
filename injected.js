$(function(){
    console.log("running")
    const menu = `
    <div class="mega-menu-container">
        <div class="mega-menu-title">
            <p> Mobile App </p>
        </div>
        <div class="mega-menu-section">
            <div class="mega-menu-section-item">
            <i class="fa fa-circle-o" aria-hidden="true"></i>

                <div class="mega-menu-section-column">
                    <div class="mega-menu-sub-section-title">Digital Stationing</div>
                    <div class="mega-menu-sub-section-sub-title">Find your location at ease.</div>
                </div>
            </div>
            <div class="mega-menu-section-item">
                <i class="fa fa-camera" aria-hidden="true"></i>
                <div class="mega-menu-section-column">
                    <div class="mega-menu-sub-section-title">Documentation</div>
                    <div class="mega-menu-sub-section-sub-title">Photography the jobsite.</div>
                </div>
            </div>
            <div class="mega-menu-section-item">
                <i class="fa fa-comment-o" aria-hidden="true"></i>
                <div class="mega-menu-section-column">
                    <div class="mega-menu-sub-section-title">Communicate</div>
                    <div class="mega-menu-sub-section-sub-title">Share Progress with team.</div>
                </div>
            </div>
        </div>
        <div class="mega-menu-footer">
            <p class="mega-menu-footer-text">View All Features</p>
        </div>
    </div>`

    const WRAPPER_CLASS="mega-menu-wrapper";
    const wrapper = `<div class="${WRAPPER_CLASS}"></div>`


    $('.header-display-desktop [href="/products"] + .header-nav-folder-content').append(wrapper)
    $(`.${WRAPPER_CLASS}`).append(menu)
    $(`.${WRAPPER_CLASS}`).append(menu)
    $(`.${WRAPPER_CLASS}`).append(menu)
});