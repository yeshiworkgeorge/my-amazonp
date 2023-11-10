import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://png.pngtree.com/thumb_back/fh260/background/20230720/pngtree-online-shopping-and-e-commerce-3d-illustration-of-computer-with-credit-image_3665950.jpg"
					alt=""
				/>
				<div className="home__row">
					<Product
						id="1"
						title="GTUOXIES 108 Inches 2023 Smart Television 2160p LCD Panel TV Ultra HD Full Array LED Screen, TS108TD Huge Dimension with Active Contrast for Home Theatre, Board Rooms, Digital Signage, Broadcasting..."
						price={9800.0}
						rating={4}
						image="https://m.media-amazon.com/images/I/71KVEljcakL._AC_SL1500_.jpg"
						alt=""
					/>

					<Product
						id="12"
						title="GTUOXIES 100 Inches 2023 Smart TV 2160p LCD Panel Ultra HD Full Array LED Screen, TS100TD Huge Dimension with Active Contrast for Home Theatre, Board Rooms, Broadcasting..."
						price={7900.0}
						rating={4}
						image="https://m.media-amazon.com/images/I/91O73aPknyL._AC_SL1500_.jpg"
						alt=""
					/>
				</div>

				<div className="home__row">
					<Product
						id="21"
						title="HP 15 inch Laptop, HD Display, AMD Ryzen 5 5500U, 8 GB RAM, 256 GB SSD, AMD Radeon Graphics, Windows 11 Home, 15-ef2099nr (2023),Silver "
						price={381.49}
						rating={4}
						image="https://m.media-amazon.com/images/I/81doZ6WLZ3L._AC_SL1500_.jpg"
						alt=""
					/>
					<Product
						id="22"
						title="Lenovo IdeaPad 3i 14 Laptop,FHD Screen, Intel i3-1115G4 Processor, 20GB RAM, 1TB SSD, HDMI, Media Card Reader, Webcam, Dolby Audio, Wi-Fi 6, Windows 11 Home, Platinum Grey"
						price={369.0}
						rating={4}
						image="https://m.media-amazon.com/images/I/71+OtOOXYaL._AC_SL1500_.jpg"
						alt=""
					/>
					<Product
						id="23"
						title="Lenovo Flex 5 Laptop, 14.0, FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 512GB Storage, AMD Radeon Graphics, Windows 11 Home, Storm Grey"
						price={604.0}
						rating={4}
						image="https://m.media-amazon.com/images/I/71lFDWaQNNL._AC_SL1500_.jpg"
						alt=""
					/>
				</div>

				<div className="home__row">
					<Product
						id="31"
						title="Bulova Men's Icon High Precision Quartz Chronograph Watch, Curved Mineral Crystal, 300m Water Resistant, Continous Sweeping Secondhand, Luminous Markers "
						price={497.73}
						rating={4}
						image="https://m.media-amazon.com/images/I/81WmCMctvsL._AC_SX679_.jpg"
						alt=""
					/>
					<Product
						id="32"
						title="Breitling Superocean II 42 A17365D1/C915-161A"
						price={3120.0}
						rating={5}
						image="https://m.media-amazon.com/images/I/61pN7iZZDLL._AC_SY500_.jpg"
						alt=""
					/>

					<Product
						id="33"
						title="Apple Watch Series 6 (GPS + Cellular, 40mm) - Space Gray Aluminum Case with Black Sport Band (Renewed)"
						price={174.9}
						rating={4}
						image="https://m.media-amazon.com/images/I/71c9vGQoYgL._AC_SL1500_.jpg"
						alt=""
					/>
				</div>
				<div className="home__row">
					<Product
						id="41"
						title="Michael Kors Sexy Ruby EDP Spray Women 1 oz "
						price={47.73}
						rating={5}
						image="https://m.media-amazon.com/images/I/71LeMy3X5vL._SL1500_.jpg"
						alt=""
					/>
					<Product
						id="42"
						title="Bal A Versailles By Jean Desprez For Women. Eau De Toilette Spray 3.4 Ounces"
						price={51.49}
						rating={5}
						image="https://m.media-amazon.com/images/I/618vmwpl4XL._SL1500_.jpg"
						alt=""
					/>
					<Product
						id="43"
						title="Dolce and Gabbana The Only One Women 1.6 oz EDP Spray"
						price={58.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/71Tc3SoxsVL._SL1500_.jpg"
						alt=""
					/>
					<Product
						id="44"
						title="Beautiful By Estee Lauder For Women. Eau De Parfum Spray 1 Fl Oz"
						price={30.25}
						rating={4}
						image="https://m.media-amazon.com/images/I/5164rbjVy1L._SL1000_.jpg"
						alt=""
					/>
				</div>

				<div className="home__row">
					<Product
						id="51"
						title="Belle Poque Women's Steampunk Gothic Vintage Victorian Gypsy Hippie Party Skirt "
						price={42.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/712pHPHlDfL._AC_SX425_.jpg"
						alt=""
					/>
					<Product
						id="52"
						title="Scarlet Darkness Maxi Long Skirt for Women Double-Layer Victorian Renaissance Skirts"
						price={46.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/61gfzkcudFS._AC_SY500_.jpg"
						alt=""
					/>
					<Product
						id="53"
						title="Belle Poque Women's Victorian Steampunk Ruffled Fishtail Mermaid Skirt BP203"
						price={59.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/71ZHIECGCAL._AC_SX385_.jpg"
						alt=""
					/>
					<Product
						id="54"
						title="Kate Kasin Wear to Work Pencil Skirts for Women Elastic High Waist Wrap Front"
						price={34.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/619l2v7ZoTL._AC_SX385_.jpg"
						alt=""
					/>
				</div>

				<div className="home__row">
					<Product
						id="61"
						title="Betsey Johnson Multi Lucite Heart Drop Earrings "
						price={14.31}
						rating={4}
						image="https://m.media-amazon.com/images/I/910978fCS5L._AC_SX425_.jpg"
						alt=""
					/>
					<Product
						id="62"
						title="Betsey Johnson Pearl Critters Owl Drop Earrings"
						price={14.0}
						rating={4}
						image="https://m.media-amazon.com/images/I/717foItSdPL._AC_SY500_.jpg"
						alt=""
					/>
					<Product
						id="63"
						title="Betsey Johnson Rose Dangle Earring Color"
						price={12.43}
						rating={4}
						image="https://m.media-amazon.com/images/I/81GeV6s6M9L._AC_SY500_.jpg"
						alt=""
					/>
					<Product
						id="64"
						title="Betsey Johnson Womens Evil Eye Linear Earrings"
						price={28.95}
						rating={4}
						image="https://m.media-amazon.com/images/I/715Gg5ev4NL._AC_SY625_.jpg"
						alt=""
					/>
					<Product
						id="64"
						title="Butterfly Drop Earrings"
						price={21.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/71bt-vhYgpL._AC_SX500_.jpg"
						alt=""
					/>
				</div>

				<div className="home__row">
					<Product
						id="71"
						title="Ethiopian 11oz Black Mug Proud To Be Unique Inspirational Sarcasm Coffee Cup Gift For Ethiopian "
						price={20.95}
						rating={4}
						image="https://m.media-amazon.com/images/I/51M3jcmaY-L._AC_SL1200_.jpg"
						alt=""
					/>
					<Product
						id="72"
						title="12X Premium Lebanese Coffee Cups - Fnejin Ahwe Shaffe From Lebanon - Traditional Handmade Lebanese Coffee Cups 2 Colors Gift Set From Beirut (Red)"
						price={69.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/51AT+CYFLUL._SL1280_.jpg"
						alt=""
					/>
					<Product
						id="73"
						title="Ethiopian coffee mug, Custom Ethiopian Coffee Mug,Ceramic Coffee Mug,Coffee Drinking Cup 11oz"
						price={25.43}
						rating={4}
						image="https://m.media-amazon.com/images/I/51+4e-H+ueL._AC_SL1500_.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
