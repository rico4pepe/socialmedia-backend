export default {
    title: 'Pin',
    name : 'pin',
    type: 'document',
    fields: [ // fields must be defined, and it must be an array
      {
          name: 'title', // 💥 ERROR a field named "myField" is already defined on this object
          title: 'Title',
          type: 'string'
      },
      // ... 
      {
        name: 'about', // 💥 ERROR a field named "myField" is already defined on this object
        title: 'About',	
        type: 'string'
      },
      {
        name: 'destination',
        title: 'Destination',
        type: 'url'
    },
    { 
        name: 'category',
        title: 'Category',
        type: 'string'
    },
    { 
        name: 'image',
        title: 'Image',
        type: 'image',
        options:{
            hotspot: true
        }
    },
    { 
        name: 'userId',
        title: 'UserID',
        type: 'string'
    },

    { 
        name: 'postedBy',
        title: 'PostedBy',
        type: 'postedBy'
    },

  
   
    ]
  }