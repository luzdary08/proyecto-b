export const MenuList = [
    
    //Dashboard
    {
        title: 'Dashboard',	
        classsChange: 'mm-collapse',		
        iconStyle: "flaticon-025-dashboard" ,
        content: [
           /* {
                title: 'Dashboard Light',
                to: 'dashboard',					
            }*/,           
            {
                title: 'Dashboard Dark',
                to: 'dashboard-dark',					
            },           
            {
                title: 'Orders List',
                to: 'order-list',					
            },           
            {
                title: 'Event',
                to: 'event',
            },
            {
                title: 'Customers',
                to: 'customer',
            },
            {
                title: 'Analytics',
                to: 'analytics',
            },
            {
                title: 'Reviews',
                to: 'reviews',
            },
            {
                title: 'Task',
                to: 'task',
            },
              
        ],
    },
    
    //Apps
    {
        title: 'Apps',	
        classsChange: 'mm-collapse',
        iconStyle: "flaticon-050-info" ,
        content: [
            {
                title: 'Profile',
                to: 'app-profile'
            },           
           
            {
                title: 'Post Details',
                to: 'post-details'
            },
            {
                title: 'Email',                
                hasMenu : true,
                content: [
                    {
                        title: 'Compose',
                        to: 'email-compose',
                    },
                    {
                        title: 'Inbox',
                        to: 'email-inbox',
                    },
                    {
                        title: 'Read',
                        to: 'email-read',
                    }
                ],
            },
            {
                title:'Calendar',
                to: 'app-calender'
            },
            {
                title: 'Shop',
                //to: './',
                hasMenu : true,
                content: [
                    {
                        title: 'Product Grid',
                        to: 'ecom-product-grid',
                    },
                    {
                        title: 'Product List',
                        to: 'ecom-product-list',
                    },
                    {
                        title: 'Product Details',
                        to: 'ecom-product-detail',
                    },
                    {
                        title: 'Order',
                        to: 'ecom-product-order',
                    },
                    {
                        title: 'Checkout',
                        to: 'ecom-checkout',
                    },
                    {
                        title: 'Invoice',
                        to: 'ecom-invoice',
                    },
                    {
                        title: 'Customers',
                        to: 'ecom-customers',
                    },
                ],
            },
        ],
    },
    
    {
        title:'Icons',
        update : 'New',
        classsChange : 'mm-collapse',
        iconStyle: "flaticon-033-feather" ,
        content : [
            {
                title:'Flaticons',
                to:'flat-icons'
            },
            {
                title:'SVG Icons',
                to:'svg-icons'
            },
            {
                title:'Feather Icons',
                to:'feather'
            },
        ],
    },
    {
        title:'CMS',
        update : 'New',
        classsChange : 'mm-collapse',
        iconStyle: "flaticon-018-clock" ,
        content : [
            {
                title:'Content',
                to:'content'
            },
            {
                title:'Add Content',
                to:'add-content'
            },
            {
                title:'Menus',
                to:'menu'
            },
            {
                title:'Email Template',
                to:'email-template'
            },
            {
                title:'Add Email',
                to:'add-email'
            },
            {
                title:'Blog',
                to:'blog'
            },
            {
                title:'Add Blog',
                to:'add-blog'
            },
            {
                title:'Blog Category',
                to:'blog-category'
            },
            
        ],
    },

    //Charts
    {
        title: 'Charts',	
        classsChange: 'mm-collapse',
        iconStyle: "flaticon-041-graph",
        content: [
            
            {
                title: 'RechartJs',
                to: 'chart-rechart',					
            },
            {
                title: 'Chartjs',
                to: 'chart-chartjs',					
            },
            {
                title: 'Sparkline',
                to: 'chart-sparkline',					
            },
            {
                title: 'Apexchart',
                to: 'chart-apexchart',					
            },
        ]
    },
    //Boosttrap
    {
        title: 'Bootstrap',	
        classsChange: 'mm-collapse',
        iconStyle: "flaticon-086-star" ,	
        content: [
            {
                title: 'Accordion',
                to: 'ui-accordion',					
            },
            {
                title: 'Alert',
                to: 'ui-alert',					
            },
            {
                title: 'Badge',
                to: 'ui-badge',					
            },
            {
                title: 'Button',
                to: 'ui-button',					
            },
            {
                title: 'Modal',
                to: 'ui-modal',					
            },
            {
                title: 'Button Group',
                to: 'ui-button-group',					
            },
            {
                title: 'List Group',
                to: 'ui-list-group',					
            },
            {
                title:'Media Object',
                to:'ui-media-object'
            },
            {
                title: 'Cards',
                to: 'ui-card',					
            },
            {
                title: 'Carousel',
                to: 'ui-carousel',					
            },
            {
                title: 'Dropdown',
                to: 'ui-dropdown',					
            },
            {
                title: 'Popover',
                to: 'ui-popover',					
            },
            {
                title: 'Progressbar',
                to: 'ui-progressbar',					
            },
            {
                title: 'Tab',
                to: 'ui-tab',					
            },
            {
                title: 'Typography',
                to: 'ui-typography',					
            },
            {
                title: 'Pagination',
                to: 'ui-pagination',					
            },
            {
                title: 'Grid',
                to: 'ui-grid',					
            },
        ]
    },
    //plugins
    {
        title:'Plugins',
        classsChange: 'mm-collapse',
        iconStyle : "flaticon-045-heart",
        content : [
            {
                title:'Select 2',
                to: 'uc-select2',
            },            
            {
                title:'Sweet Alert',
                to: 'uc-sweetalert',
            },
            {
                title:'Toastr',
                to: 'uc-toastr',
            },            
            {
                title:'Light Gallery',
                to: 'uc-lightgallery',
            },
        ]
    },
    //Widget
    {   
        title:'Widget',
        //classsChange: 'mm-collapse',
        iconStyle: "flaticon-013-checkmark" ,
        to: 'widget-basic',
    },
    //Forms
    {
        title:'Forms',
        classsChange: 'mm-collapse',
        iconStyle: "flaticon-072-printer" ,
        content : [
            {
                title:'Form Elements',
                to: 'form-element',
            },
            {
                title:'Wizard',
                to: 'form-wizard',
            },
            {
                title:'CkEditor',
                to: 'form-ckeditor',
            },
            {
                title:'Pickers',
                to: 'form-pickers',
            },
            {
                title:'Form Validate',
                to: 'form-validation',
            },

        ]
    },
    //Table
    {
        title:'Table',
        classsChange: 'mm-collapse',
        iconStyle: "flaticon-043-menu",
        content : [
            {
                title:'Table Filtering',
                to: 'table-filtering',
            },
            {
                title:'Table Sorting',
                to: 'table-sorting',
            },
            {
                title:'Bootstrap',
                to: 'table-bootstrap-basic',
            },
            {
                title:'Tables',
                to: 'table-datatable-basic',
            },
           

        ]
    },
    //Pages
    {
        title:'Pages',
        classsChange: 'mm-collapse',
        iconStyle: "flaticon-022-copy",
        content : [
            {
                title:'Error',
                hasMenu : true,
                content : [
                    {
                        title: 'Error 400',
                        to : 'page-error-400',
                    },
                    {
                        title: 'Error 403',
                        to : 'page-error-403',
                    },
                    {
                        title: 'Error 404',
                        to : 'page-error-404',
                    },
                    {
                        title: 'Error 500',
                        to : 'page-error-500',
                    },
                    {
                        title: 'Error 503',
                        to : 'page-error-503',
                    },
                ],
            },
            {
                title:'Lock Screen',
                to: 'page-lock-screen',
            },

        ]
    },
    
]