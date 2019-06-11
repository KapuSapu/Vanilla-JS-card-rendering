
function renderCards(store, number) {
    document.getElementsByClassName('content')[0].innerHTML = `
    	${store.map((card, i) => {
    		if (i <= number) {
			    return (
				    `
						<div class='test' onclick='mylinkfunction()'>
                            <div class='card'>
								<div class='wrapper'>
									<img src='${card.img}' alt='Product photo'/>
								</div>
                                <div class='product-description'>
                                    <span class='id'>This item id is ${card.id}</span></br>
									<span class='name'>${card.name}</span></br>
									<span class='price'>Buy now only for ${card.price}</span></br>
								</div>
									
									<div class="dropdown">
										<button class="dropbtn">Buy now!</button>
										<div id="myDropdown${card.id}" class="dropdown-content">
											<a href="#">Buy faster</a>
											<a href="#">Compare</a>
											<a href="#">Search</a>
											<a href="#">Add to the list</a>
										</div>
									</div>
							</div>
						</div>
				    `
			    );	
		    }
		}).join('')}
    `;
}