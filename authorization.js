const router = require('express').Router

const userRights = [
    { 
        userKey: 1,
        canCreate: 1,
        canDelete: 1,
        canEdit: 1,
        isAdmin: 1,
    },
    {
        useKey: 1,
        canCreate: 1,
        canDelete: 0,
        canEdit: 0,
        isAdmin: 0
    }
]












module.export = router