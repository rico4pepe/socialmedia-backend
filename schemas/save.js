export default 
{
    title: 'Save',
    name : 'save',
    type: 'document',
    fields: [ // fields must be defined, and it must be an array
      {
          name: 'postedBy', // 💥 ERROR a field named "myField" is already defined on this object
          title: 'PostedBy',
          type: 'postedBy'
      },

    { 
        name: 'userId',
        title: 'UserID',
        type: 'string'
    },

  
   
    ]
  }
  