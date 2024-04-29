import React from 'react'
import Marquee from './Marquee';

function Marquees() {
    var images = [
        ["https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png", 
        "https://w0.peakpx.com/wallpaper/753/980/HD-wallpaper-google-black-logo-thumbnail.jpg",
        "https://t4.ftcdn.net/jpg/03/05/78/49/360_F_305784966_dPyZWmcNEXqzzjnH0FJFRu4aKYYJAi4d.jpg",
        "https://fullstop360.com/blog/wp-content/uploads/2020/09/Famous-Black-and-White-Logos-1.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsal0I3bxx_JHWuYZhADgBXMt4VfbZOwsNYVmltwVQvQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQhjy8tJ0hq0GOG87pB-u3VIAk5FPGFQpChYiZ-6gkA&s",
        "https://assets.turbologo.com/blog/en/2021/08/03023950/Apple_logo-1.png",
        "https://cdn.logojoy.com/wp-content/uploads/2018/08/23161105/39.png",
        "https://i.pinimg.com/236x/a3/f6/32/a3f6327d6dc78109f44ff6823490053c.jpg",
        "https://images-platform.99static.com//NG9lM1yEWvgz3KU0ujcQy5Hin6g=/669x0:1348x679/fit-in/500x500/99designs-contests-attachments/125/125576/attachment_125576183",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoNeG37H2DXBkHDBHFXz_-q-4mZhKlJt3oQCG0w_cx&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT77tSVnbeTgx4bGR_tNmDPNi0txAsQFTli6ovj0qCZOw&s"
        ],

        ["https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png", 
        "https://w0.peakpx.com/wallpaper/753/980/HD-wallpaper-google-black-logo-thumbnail.jpg",
        "https://t4.ftcdn.net/jpg/03/05/78/49/360_F_305784966_dPyZWmcNEXqzzjnH0FJFRu4aKYYJAi4d.jpg",
        "https://fullstop360.com/blog/wp-content/uploads/2020/09/Famous-Black-and-White-Logos-1.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsal0I3bxx_JHWuYZhADgBXMt4VfbZOwsNYVmltwVQvQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQhjy8tJ0hq0GOG87pB-u3VIAk5FPGFQpChYiZ-6gkA&s",
        "https://assets.turbologo.com/blog/en/2021/08/03023950/Apple_logo-1.png",
        "https://cdn.logojoy.com/wp-content/uploads/2018/08/23161105/39.png",
        "https://i.pinimg.com/236x/a3/f6/32/a3f6327d6dc78109f44ff6823490053c.jpg",
        "https://images-platform.99static.com//NG9lM1yEWvgz3KU0ujcQy5Hin6g=/669x0:1348x679/fit-in/500x500/99designs-contests-attachments/125/125576/attachment_125576183",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoNeG37H2DXBkHDBHFXz_-q-4mZhKlJt3oQCG0w_cx&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT77tSVnbeTgx4bGR_tNmDPNi0txAsQFTli6ovj0qCZOw&s"
        ]
    ]
  return (
    <div className='py-20 mt-32 w-full relative overflow-hidden'>
        {images.map( (item,index) => <Marquee imagesurl = {item} direction={index ===0 ? "left" : "right"} />)}
    </div>
  )
}

export default Marquees;