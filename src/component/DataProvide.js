import React,{createContext,useState} from 'react'
export const DataContext =createContext()

export const DataProvide =(props)=> {
  const [products, setProducts] = useState([
    {
      _id: '1',
      title: 'Wacth Product 01',
      images: [
        'https://dl.airtable.com/.attachmentThumbnails/145f3eaf0a3e3d3b87497dad021a7840/0099e30d',
        'https://dl.airtable.com/.attachmentThumbnails/3d276189f4a40d269e61550745586419/dd3cf01e',
        
      ],
      description:
        'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
      content:
        'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
      colors: ['red', 'black', 'teal'],
      sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      price: 101,
      count: 1,
    },
    {
      _id: '2',
      title: 'Wacth Product 02',
      images: [
        'https://dl.airtable.com/.attachmentThumbnails/bafb3d4d6ddf92688385a9148ba55ac2/b20e0072',
        'https://dl.airtable.com/.attachmentThumbnails/480a86a401bac8f7d4f68d985286bbd9/18268dcb',
        
      ],
      description:
        'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
      content:
        'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
      colors: ['red', 'black', 'teal'],
      sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      price: 102,
      count: 1,
    },
    {
      _id: '3',
      title: 'Wacth Product 03',
      images: [
        'https://dl.airtable.com/.attachmentThumbnails/c62248404535eac1e026708e0f9fb0a2/b03117de',
        'https://dl.airtable.com/.attachmentThumbnails/1517de99396ac5e1a772275976ce9fb6/15675d2b',
        
      ],
      description:
        'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
      content:
        'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
      colors: ['red', 'black', 'teal'],
      sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      price: 103,
      count: 1,
    },
    
      
  ]);

  return (
    <DataContext.Provider value={[products,setProducts]}>
      {props.children}
    </DataContext.Provider>
  )
}
