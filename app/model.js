// console.log("model");
var MODEL = (function () {
    var _myVar = "Model";
    var _homePageInfo = ` <section>
    <div class=" hero hero--home1">
        <div class="text-container">
            <h1 class="hero__main_header">WE HAVE THE FOOD!!</h1>
            <h2 class="hero__sub_header"> Delivery or Pick up, we Have you Covered</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus vero, fugiat, veniam
                perspiciatis
                nemo, rem sapiente at enim fuga aut atque similique optio cumque vitae aperiam debitis? Nisi,
                voluptatibus accusamus.
            </p>
        </div>
    </div>
    <div class=" hero hero--home2">
        <div class="text-container">
            <h1 class="hero__main_header">WE HAVE EVEN MORE FOOD</h1>
            <h2 class="hero__sub_header"> Delivery or Pick up, we Have you Covered</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus vero, fugiat, veniam
                perspiciatis
                nemo, rem sapiente at enim fuga aut atque similique optio cumque vitae aperiam debitis? Nisi,
                voluptatibus accusamus.
            </p>
        </div>
    </div>
</section>`;

    var _aboutPageInfo = `<div class=" hero hero--about">
    <div class="text-container">
        <h1 class="hero__main_header">ABOUT OUR FOOD / SUPPLIERS</h1>
        <h2 class="hero__sub_header"> We source our food from only the most reliable sources</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae culpa voluptatibus a dolor sapiente aut reprehenderit molestias consequatur sed commodi unde obcaecati ad mollitia ipsum, nihil pariatur odio assumenda vel!
        Aliquam vitae inventore porro a nihil eaque corporis animi laudantium voluptates beatae, cumque commodi libero natus ab vero excepturi repudiandae nulla illo vel. Quis vel eveniet, impedit quod velit suscipit!
        Accusamus rem corrupti ea, officiis enim temporibus cumque voluptatem illo facere assumenda fugit dolores? Iste nostrum ad deleniti, corporis aut, voluptate in magnam eaque placeat eveniet asperiores incidunt quidem temporibus!
        Quos ducimus, consequatur impedit fugit molestias, incidunt voluptates saepe dignissimos unde voluptatum ipsum laudantium voluptas rerum iusto vero! Nesciunt quos aperiam est quia aut, laboriosam voluptatum obcaecati minima necessitatibus repudiandae!
        Sed alias maiores id, facilis accusamus explicabo quod, magni vero aliquid quos beatae asperiores, earum nostrum distinctio. Omnis autem dicta nobis quas sint consectetur veniam, nostrum fugiat debitis sapiente ipsum.
        Rem inventore accusamus reprehenderit ratione asperiores molestias blanditiis fugiat unde aspernatur consectetur. Sapiente esse quo natus repudiandae id sunt quia debitis iste voluptatum assumenda, omnis consequuntur, vero, vitae sequi a.
        Voluptate, eius sunt, eum odit molestias totam harum animi eveniet alias sed voluptatibus corporis perspiciatis saepe error temporibus praesentium? Voluptates, ad non? Minima sint, mollitia corporis atque id a nemo.
        Qui minus iure ad, saepe, voluptatem enim, natus doloribus eius tempora pariatur sit amet esse. Officia aut odio eaque a? Tempora aperiam repellendus fugiat quas ea eveniet impedit odio officiis.
        </p>
    </div>
</div>
<div class=" hero hero--about2">
    

    <div class="text-container">
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione porro, dignissimos deserunt similique optio rerum veniam incidunt, repudiandae, in enim eligendi delectus beatae! Ea quos blanditiis numquam accusantium quis labore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus dolorem dolores earum totam excepturi! Officiis delectus totam quaerat amet ullam, cum ratione voluptate neque possimus quae harum exercitationem perspiciatis aut. 
        </p>
    </div>
    <div class="text-container">
      
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vitae veritatis numquam accusamus dolor placeat adipisci! Architecto eum incidunt, fugiat ipsam praesentium repellat doloremque vel expedita delectus ratione, optio voluptatem?
        Perspiciatis vero inventore laudantium quae vitae quidem incidunt iure facere aperiam, quis explicabo officiis totam, ut molestias similique veniam dignissimos tempora assumenda delectus, voluptas nam. Nisi debitis magni facilis animi.
        </p>
    </div>
</div>`;
    var _shopPageInfo = `<div class=" hero hero--shop">
    <div class="text-container">
        <h1 class="hero__main_header">WHAT WE HAVE TO OFFER</h1>
        
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus vero, fugiat, veniam
            perspiciatis
            nemo, rem sapiente at enim fuga aut atque similique optio cumque vitae aperiam debitis? Nisi,
            voluptatibus accusamus.
        </p>
    </div>
</div>
<section class="products">
   
    <div class="products__flex">
        <div class="products__flex__holder holder--one">
            <h2>Lorem</h2>
        </div>
        <div class="products__flex__holder holder--two">
            <h2>Lorem</h2>

        </div>
        <div class="products__flex__holder holder--three">
            <h2>Lorem</h2>
        </div>
        <div class="products__flex__holder holder--four">
            <h2>Lorem</h2>


        </div>
        <div class="products__flex__holder holder--five">
            <h2>Lorem</h2>


        </div>
        <div class="products__flex__holder holder--six">
            <h2>Lorem</h2>


        </div>

    </div>

</section>
`;
    var _contactPageInfo = ` <div class=" hero hero--contact">
    <div class="text-container">
        <h1 class="hero__main_header">Be Sure to Contact Us!</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus vero, fugiat, veniam
            perspiciatis
            nemo, rem sapiente at enim fuga aut atque similique optio cumque vitae aperiam debitis? Nisi,
            voluptatibus accusamus.
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur </li>
                <li>earum voluptatum id, eum officia saepe qui eius vero quaerat, obcaecati cum! Qui, voluptates!</li>
                <li>qui eius vero quaerat, obcaecati cum! Qui, voluptates!</li>
                <li>consequuntur mollitia tenetur quam repudiandae deserunt! Saepe autem mollitia obcaecati recusandae consectetur.</li>
                <li></li>
                
            </ul>
        </p>
    </div>
</div>`;


    var _getMyVariable = function (buttonID, callback,) {
        console.log("Model.js 6 " + buttonID);
        let newName = "_" + buttonID + "PageInfo";
        $("#content").html(eval(newName));
        console.log(newName)

        if (callback) {
            callback(newName);
        }


    };


    return {
        getMyVariable: _getMyVariable,
    };

})();
