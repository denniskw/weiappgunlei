

var app = getApp()
Page({

    data: {
        wlzb_bannerUrl: 'https://cdn.gunlei.com/static/h5/v2.0/img/wlzb_banner.jpg',
        livingVideoUrl: 'https://cdn.gunlei.com/static/h5/v2.0/img/wlzb1.mp4',
        locationUrl: 'https://cdn.gunlei.com/static/h5/v2.0/img/wlzb_vide1_bg.jpg',
        livingVideoUrl2: 'https://cdn.gunlei.com/pc/video/wlzb.mp4?v=20160922',

        itemArray: [
            {
                title: "仓储实景图",
                urls: [{ url: "https://cdn.gunlei.com/static/h5/v2.0/img/log_living1.jpg" },
                { url: "https://cdn.gunlei.com/static/h5/v2.0/img/log_living1_1.jpg" }]
            },
            {
                title: "拖车实景图",
                urls: [{ url: "https://cdn.gunlei.com/static/h5/v2.0/img/log_living2.jpg" },
                { url: "https://cdn.gunlei.com/static/h5/v2.0/img/log_living2_1.jpg" }]
            },
            {
                title: "海运实景图",
                urls: [{ url: "https://cdn.gunlei.com/static/h5/v2.0/img/log_living3.jpg" },
                { url: "https://cdn.gunlei.com/static/h5/v2.0/img/log_living3_1.jpg" },]
            },
        ]

    }
}
)