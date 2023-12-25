import React from 'react';
import './components/Pic.css';
import background from './components/space-art.jpg'
export default function Pic(props) {
  return (<>
  <div className='bod' style={{ backgroundImage: `url(${background})`}}><br/>
  <div className='ap'>
  <strong><h1 className={`mx-5 text-${props.mode1}`} style={{fontSize: "3rem", fontFamily: 'sans-serif'}}>Your troubles of searching for pictures end here!</h1></strong></div>
  <div className='spac'></div>
    <div className="pict">
      <div className='ap1'>
      <strong><h1 className={`text-${props.mode1}`}>Artistic Masterpiece</h1></strong></div><br/><br/>
      <div className="row mx-5">


        <div className="col-md-3 mx-4 my-3">
          <div className="card mx-2" style={{ width: "18rem" }}>
            <a href='https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/starry-night-starry-night.jpg'><img src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/starry-night-starry-night.jpg" className="card-img-top" alt="" /></a>
          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card mx-2" style={{ width: "18rem" }}>
            <a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3oR66UwlmuY3WxY1IKjZNTEiIhyAJlMsYg&usqp=CAU'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3oR66UwlmuY3WxY1IKjZNTEiIhyAJlMsYg&usqp=CAU" className="card-img-top" alt="..." /></a>

          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card w-75 mx-2" style={{ width: "18rem" }}>
            <a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVkBKmCWv51ItgiykGYIr-DNl7r_7s3EgPQ&usqp=CAU'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVkBKmCWv51ItgiykGYIr-DNl7r_7s3EgPQ&usqp=CAU" className="card-img-top" alt="..." /></a>
          </div>
        </div>
      </div>
      <div className="row mx-5">
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZDqZoH4tETtWvT9TiD3zkePPk5MgVGzRETA&usqp=CAU'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZDqZoH4tETtWvT9TiD3zkePPk5MgVGzRETA&usqp=CAU" className="card-img-top" alt="..." /></a>

          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card w-75" style={{ width: "18rem" }}>
            <a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOfZtSajbjrcFX72x9uPGAYqbr-8FqkycS5g&usqp=CAU'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOfZtSajbjrcFX72x9uPGAYqbr-8FqkycS5g&usqp=CAU" className="card-img-top" alt="..." /></a>
          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://cdn.openart.ai/uploads/image_Tgu6s-jJ_1694191674701_512.webp'><img src="https://cdn.openart.ai/uploads/image_Tgu6s-jJ_1694191674701_512.webp" className="card-img-top" alt="..." /></a>
          </div>
        </div>
      </div>
      <div className="row mx-5">
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://www.elpasotimes.com/gcdn/-mm-/1d3f93371215048b87788a8e311422490d852dcb/c=0-163-750-587/local/-/media/2016/01/20/TXNMGroup/LasCruces/635889065755690761-AOW-1.JPG?width=660&height=374&fit=crop&format=pjpg&auto=webp'><img src="https://www.elpasotimes.com/gcdn/-mm-/1d3f93371215048b87788a8e311422490d852dcb/c=0-163-750-587/local/-/media/2016/01/20/TXNMGroup/LasCruces/635889065755690761-AOW-1.JPG?width=660&height=374&fit=crop&format=pjpg&auto=webp" className="card-img-top" alt="..." /></a>

          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8PtLn639xc5CGxO9vTVDIhjj8mHjLvxr9G1-sVO9rXQ_l-cP43gmU3kpTCrgAb-XEdc&usqp=CAU'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8PtLn639xc5CGxO9vTVDIhjj8mHjLvxr9G1-sVO9rXQ_l-cP43gmU3kpTCrgAb-XEdc&usqp=CAU" className="card-img-top" alt="..." /></a>
          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://cdn.artschaft.com/95657986962.jpg'><img src="https://cdn.artschaft.com/95657986962.jpg" className="card-img-top" alt="..." /></a>
          </div>
        </div>
      </div><br/><br/>
      <div className='ap1'>
      <strong><h1 className={` text-${props.mode1}`}>Wonders Of World</h1></strong></div><br/><br/>
      <div className="row mx-5">
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://cdn.britannica.com/36/162636-131-E4AA93A0/Colosseum-Rome-Italy.jpg'><img src="https://cdn.britannica.com/36/162636-131-E4AA93A0/Colosseum-Rome-Italy.jpg" className="card-img-top" alt="..." /></a>

          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/12/12/hub-peru.jpg.rend.hgtvcom.476.357.suffix/1491584605723.jpeg'><img src="https://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/12/12/hub-peru.jpg.rend.hgtvcom.476.357.suffix/1491584605723.jpeg" className="card-img-top" alt="..." /></a>
          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://i.natgeofe.com/k/e924c4a8-cf47-4621-9ef8-20884ad2444f/Pyramids-at-Giza_square.png'><img src="https://i.natgeofe.com/k/e924c4a8-cf47-4621-9ef8-20884ad2444f/Pyramids-at-Giza_square.png" className="card-img-top" alt="..." /></a>
          </div>
        </div>
      </div>
      <div className="row mx-5">
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/taj-mahal-202004-1587656298.jpg'><img src="https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/taj-mahal-202004-1587656298.jpg" className="card-img-top" alt="..." /></a>

          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://ca-times.brightspotcdn.com/dims4/default/b850e49/2147483647/strip/true/crop/500x333+0+8/resize/1440x960!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6f%2Fab%2F7fa1ddd991f0d12458276fb35ceb%2Fla-sevenwonders1-jku3c3nc'><img src="https://ca-times.brightspotcdn.com/dims4/default/b850e49/2147483647/strip/true/crop/500x333+0+8/resize/1440x960!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6f%2Fab%2F7fa1ddd991f0d12458276fb35ceb%2Fla-sevenwonders1-jku3c3nc" className="card-img-top" alt="..." /></a>
          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://static.toiimg.com/photo/msid-88046661,width-96,height-65.cms'><img src="https://static.toiimg.com/photo/msid-88046661,width-96,height-65.cms" className="card-img-top" alt="..." /></a>
          </div>
        </div>
      </div>
      <div className="row mx-5">
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://media.licdn.com/dms/image/C4D12AQGZoBNLPp0zow/article-cover_image-shrink_720_1280/0/1588087268580?e=2147483647&v=beta&t=ESe_pfzuc5DBftckzM8Q3osNu2VMIjlP9hkmNNoFyWI'><img src="https://media.licdn.com/dms/image/C4D12AQGZoBNLPp0zow/article-cover_image-shrink_720_1280/0/1588087268580?e=2147483647&v=beta&t=ESe_pfzuc5DBftckzM8Q3osNu2VMIjlP9hkmNNoFyWI" className="card-img-top" alt="..." /></a>

          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZiOznnED2zclpbkdW2y7g1HDn3jNAppHolQ&usqp=CAU'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZiOznnED2zclpbkdW2y7g1HDn3jNAppHolQ&usqp=CAU" className="card-img-top" alt="..." /></a>
          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://static01.nyt.com/images/2017/12/08/travel/360-christ/360-christ-superJumbo.jpg'><img src="https://static01.nyt.com/images/2017/12/08/travel/360-christ/360-christ-superJumbo.jpg" className="card-img-top" alt="..." /></a>
          </div>
        </div>
      </div><br/><br/>
      <div className='ap2'>
      <strong><h1 className={` text-${props.mode1}`}>Adventure Imagination</h1></strong></div><br/><br/>
      <div className="row mx-5">
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://thumbs.dreamstime.com/b/target-achievement-mountain-adventure-taurus-mountains-altitude-meter-61542260.jpg'><img src="https://thumbs.dreamstime.com/b/target-achievement-mountain-adventure-taurus-mountains-altitude-meter-61542260.jpg" className="card-img-top" alt="..." /></a>
          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://img.freepik.com/free-photo/hiking-men-conquer-mountain-peak-adventure-awaits-generative-ai_188544-7877.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703289600&semt=sph'><img src="https://img.freepik.com/free-photo/hiking-men-conquer-mountain-peak-adventure-awaits-generative-ai_188544-7877.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703289600&semt=sph" className="card-img-top" alt="..." /></a>
          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://thumbs.dreamstime.com/b/happy-travel-woman-vacation-concept-funny-traveler-enjoy-her-trip-ready-to-adventure-happy-travel-woman-vacation-concept-118679424.jpg'><img src="https://thumbs.dreamstime.com/b/happy-travel-woman-vacation-concept-funny-traveler-enjoy-her-trip-ready-to-adventure-happy-travel-woman-vacation-concept-118679424.jpg" className="card-img-top" alt="..." /></a>
          </div>
        </div>
      </div>
      <div className="row mx-5">
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo3IX6LrEcpvE4RMURlmpyV8nxYIsq40ngABBvD6mlivrUrS3guxwmKU_Fpnj1hSR_hkY&usqp=CAU'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo3IX6LrEcpvE4RMURlmpyV8nxYIsq40ngABBvD6mlivrUrS3guxwmKU_Fpnj1hSR_hkY&usqp=CAU" className="card-img-top" alt="..." /></a>

          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card w-100" style={{ width: "18rem" }}>
            <a href='https://media.istockphoto.com/id/516449022/photo/lady-with-kayak.jpg?s=612x612&w=0&k=20&c=Yp-rzpmY_hbhpbTE38z6toouRKW-lAEN-ZvuWvH8kKE='><img src="https://media.istockphoto.com/id/516449022/photo/lady-with-kayak.jpg?s=612x612&w=0&k=20&c=Yp-rzpmY_hbhpbTE38z6toouRKW-lAEN-ZvuWvH8kKE=" className="card-img-top" alt="..." /></a>
          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card w-100" style={{ width: "18rem" }}>
            <a href='https://www.visitsaudi.com/content/dam/saudi-tourism/media/activities-and-attractions-categories/Adventure_Activities_Hero_Banner.jpg'><img src="https://www.visitsaudi.com/content/dam/saudi-tourism/media/activities-and-attractions-categories/Adventure_Activities_Hero_Banner.jpg" className="card-img-top" alt="..." /></a>
          </div>
        </div>
      </div>
      <div className="row mx-5">
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://images.pexels.com/photos/939729/pexels-photo-939729.jpeg?cs=srgb&dl=pexels-guduru-ajay-bhargav-939729.jpg&fm=jpg'><img src="https://images.pexels.com/photos/939729/pexels-photo-939729.jpeg?cs=srgb&dl=pexels-guduru-ajay-bhargav-939729.jpg&fm=jpg" className="card-img-top" alt="..." /></a>

          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card w-100" style={{ width: "18rem" }}>
            <a href='https://images.hindustantimes.com/img/2022/01/21/1600x900/bf0cce4e-79af-11ec-9200-af8cbbcf9206_1642765235944.jpg'><img src="https://images.hindustantimes.com/img/2022/01/21/1600x900/bf0cce4e-79af-11ec-9200-af8cbbcf9206_1642765235944.jpg" className="card-img-top" alt="..." /></a>
          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card w-100" style={{ width: "18rem" }}>
            <a href='https://static.vecteezy.com/system/resources/thumbnails/023/189/875/small/ai-generated-ai-generative-adventure-outdoor-nature-motivational-poster-with-man-standing-in-fron-of-a-mountain-graphic-art-photo.jpg'><img src="https://static.vecteezy.com/system/resources/thumbnails/023/189/875/small/ai-generated-ai-generative-adventure-outdoor-nature-motivational-poster-with-man-standing-in-fron-of-a-mountain-graphic-art-photo.jpg" className="card-img-top" alt="..." /></a>
          </div>
        </div>
      </div><br/><br/>
      <div className='ap1'>
      <strong><h1 className={` text-${props.mode1}`}>Wildlife Photography</h1></strong></div><br/><br/>
      <div className="row mx-5">
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://www.format.com/wp-content/uploads/emily_mesner_wildlife_photography-1.jpg'><img src="https://www.format.com/wp-content/uploads/emily_mesner_wildlife_photography-1.jpg" className="card-img-top" alt="..." /></a>

          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card w-100" style={{ width: "18rem" }}>
            <a href='https://c02.purpledshub.com/uploads/sites/62/2021/09/Silhouetted-elephants.-Chris-Packham.-Remembering-Elephants-da11c3e.jpg?w=1029&webp=1'><img src="https://c02.purpledshub.com/uploads/sites/62/2021/09/Silhouetted-elephants.-Chris-Packham.-Remembering-Elephants-da11c3e.jpg?w=1029&webp=1" className="card-img-top" alt="..." /></a>
          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZGxpZmV8ZW58MHx8MHx8fDA%3D'><img src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZGxpZmV8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." /></a>
          </div>
        </div>
      </div>
      <div className="row mx-5">
        <div className="col-md-3 mx-4 my-3">
          <div className="card w-100" style={{ width: "18rem" }}>
            <a href='hhttps://images.hindustantimes.com/img/2021/08/20/550x309/030cb9d0-00e6-11ec-a9e6-af764bf61cc2_1629442157352.jpg'><img src="https://images.hindustantimes.com/img/2021/08/20/550x309/030cb9d0-00e6-11ec-a9e6-af764bf61cc2_1629442157352.jpg" className="card-img-top" alt="..." /></a>

          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card w-100 " style={{ width: "18rem" }}>
            <a href='https://res.cloudinary.com/hamstech/images/f_auto,q_auto/v1622735732/Hamstech%20App/title-image_804590008062b/title-image_804590008062b.jpg'><img src="https://res.cloudinary.com/hamstech/images/f_auto,q_auto/v1622735732/Hamstech%20App/title-image_804590008062b/title-image_804590008062b.jpg" className="card-img-top" alt="..." /></a>
          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://media.npr.org/assets/img/2022/10/12/-karine-aigner-1-wildlife-photographer-of-the-year-_custom-adc691fe357d9e974c130f0e6535460efc91679e-s1100-c50.jpg'><img src="https://media.npr.org/assets/img/2022/10/12/-karine-aigner-1-wildlife-photographer-of-the-year-_custom-adc691fe357d9e974c130f0e6535460efc91679e-s1100-c50.jpg" className="card-img-top" alt="..." /></a>
          </div>
        </div>
      </div>
      <div className="row mx-5">
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmnEEnfxNq7haHanTtTyvJ5YpuiO_hJ9-Q6A&usqp=CAU'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmnEEnfxNq7haHanTtTyvJ5YpuiO_hJ9-Q6A&usqp=CAU" className="card-img-top" alt="..." /></a>

          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <a href='https://imageio.forbes.com/specials-images/imageserve/61a5eb0c02b3567c9c7cfdd3/Two-colorful-male-golden-pheasants-in-a-silent-dance-in-the-snow-in-China-/960x0.jpg?height=473&width=711&fit=bounds'><img src="https://imageio.forbes.com/specials-images/imageserve/61a5eb0c02b3567c9c7cfdd3/Two-colorful-male-golden-pheasants-in-a-silent-dance-in-the-snow-in-China-/960x0.jpg?height=473&width=711&fit=bounds" className="card-img-top" alt="..." /></a>
          </div>
        </div>
        <div className="col-md-3 mx-4 my-3">
          <div className="card w-100" style={{ width: "18rem" }}>
            <a href='https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2023/04/wildlife-photography-mistakes.jpg'><img src="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2023/04/wildlife-photography-mistakes.jpg" className="card-img-top" alt="..." /></a>
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
  )
}
