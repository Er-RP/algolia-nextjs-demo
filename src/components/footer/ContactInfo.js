import React from 'react'
import fb_image from '../../images/icons/fb.svg';
import insta_image from '../../images/icons/insta.svg';
import pinterest_image from '../../images/icons/pinterest.svg';
import twitter_image from '../../images/icons/twitter.svg';
const ContactInfo = () => {
    const address= "3, Kongu Street, Ramanathapuram, Coimbatore.";
    const socialmedia= [
      { icon: fb_image, alt: 'facebook' },
      { icon: insta_image, alt: 'instagram' },
      { icon: pinterest_image, alt: 'pinterest' },
      { icon: twitter_image, alt: 'twitter' },
    ]
 
  return (
    <div>
        {address}
        <div className='flex my-3'>
        {socialmedia.map((social, index) => (
                <img key={index} src={social.icon} alt={social.alt} className="w-6 h-6 mr-4 hover:scale-105 duration-75 cursor-pointer" />
              ))}
        </div>
    </div>
  )
};

export default ContactInfo