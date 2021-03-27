const AdminBro = require('admin-bro');
const CRUD = require('../database/database.js');

const parent = {
    name: "Title",
    icon: "icon"
}

const branding = {
    companyName: "CRUD",
    favicon: "Your Favicon URL",
    logo: "Your Logo URL",
}

const adminBroOptions = new AdminBro({
    resources: [
        {
            resource: CRUD,
            options: {
                properties: {
                    description: { type: 'richtext' },
                    created_at: {
                        isVisible: { 
                            edit: false, 
                            list: true, 
                            show: true, 
                            filter: true 
                        }
                    }
                },
                parent
            }
        },
    ],
    locale: {
        translations: {
            labels: {
                CRUD: 'My CRUDs'
            }
        }
    },
    branding,
    rootPath: '/admin'
});

module.exports = adminBroOptions;