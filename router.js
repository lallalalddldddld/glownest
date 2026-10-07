function render(){
  const url=new URL(location.href); const path=url.pathname.replace(/\/+$/,'')||'/';
  if(path==='/') app.innerHTML=home();
  else if(path.startsWith('/category/')) app.innerHTML=categoryPage(path.split('/')[2]);
  else if(path.startsWith('/product/')) app.innerHTML=productPage(path.split('/')[2]);
  else if(path==='/search') app.innerHTML=searchPage(url.searchParams.get('q')||'');
  else if(path==='/wishlist') app.innerHTML=wishlistPage();
  else if(path==='/cart') app.innerHTML=cartPage();
  else if(path==='/checkout') app.innerHTML=checkoutPage();
  else if(path==='/order-confirmation') app.innerHTML=confirmationPage();
  else if(path==='/about') app.innerHTML=aboutPage();
  else if(path==='/service') app.innerHTML=servicePage();
  else app.innerHTML=notFound();
  updateCounts(); bindPage();
  const hash=url.hash;if(hash)setTimeout(()=>document.querySelector(hash)?.scrollIntoView(),30);else scrollTo({top:0,behavior:'instant'});
  app.focus({preventScroll:true});
}
function navigate(href){history.pushState({},'',href);render()}

document.addEventListener('click',e=>{
  const link=e.target.closest('[data-link]');if(link&&link.origin===location.origin){e.preventDefault();closeMenu();navigate(link.getAttribute('href'))}
  const add=e.target.closest('[data-add]');if(add){e.preventDefault();addToCart(add.dataset.add)}
  const wish=e.target.closest('[data-wish]');if(wish){e.preventDefault();toggleWish(wish.dataset.wish)}
  const qty=e.target.closest('[data-qty]');if(qty){const id=qty.dataset.qty;const next=(state.cart[id]||0)+Number(qty.dataset.delta);if(next<=0)delete state.cart[id];else state.cart[id]=next;save();render()}
  const rem=e.target.closest('[data-remove]');if(rem){delete state.cart[rem.dataset.remove];save();render()}
  if(e.target.closest('[data-close-modal]')) $('#account-modal').close();
});
window.addEventListener('popstate',render);

function bindPage(){
  const sort=$('#sort'); if(sort){sort.addEventListener('change',applyFilters);document.querySelectorAll('[data-price]').forEach(x=>x.addEventListener('change',applyFilters))}
  const checkout=$('#checkout-form'); if(checkout) checkout.addEventListener('submit',e=>{e.preventDefault();if(!checkout.reportValidity())return;const fd=new FormData(checkout);const t=totals();const order='GN-'+Math.random().toString(36).slice(2,8).toUpperCase();sessionStorage.setItem('glownest-order',JSON.stringify({order,name:fd.get('firstName'),email:fd.get('email'),payment:fd.get('payment'),total:t.total}));state.cart={};save();navigate('/order-confirmation')});
}
function applyFilters(){const slug=location.pathname.split('/')[2];let list=products.filter(p=>p.category===slug);const checks=[...document.querySelectorAll('[data-price]:checked')].map(x=>Number(x.dataset.price));if(checks.length){const max=Math.min(...checks);list=list.filter(p=>p.price<=max)}const s=$('#sort')?.value;if(s==='low')list.sort((a,b)=>a.price-b.price);if(s==='high')list.sort((a,b)=>b.price-a.price);if(s==='rating')list.sort((a,b)=>b.rating-a.rating);$('#category-products').innerHTML=list.map(productCard).join('');$('#result-count').textContent=`${list.length} producten`}

$('#search-form').addEventListener('submit',e=>{e.preventDefault();const q=$('#site-search').value.trim();$('#search-suggestions').hidden=true;navigate('/search?q='+encodeURIComponent(q))});
$('#site-search').addEventListener('input',e=>{const q=e.target.value.toLowerCase().trim(),box=$('#search-suggestions');if(q.length<2){box.hidden=true;return}const hits=products.filter(p=>[p.name,...p.tags].join(' ').toLowerCase().includes(q)).slice(0,5);box.innerHTML=hits.length?hits.map(p=>`<button type="button" data-search-product="${p.id}">${p.name}<br><span class="muted small">${money.format(p.price)} · ${categories[p.category].name}</span></button>`).join(''):`<button type="button" data-search-query="${escapeHtml(q)}">Zoek naar “${escapeHtml(q)}”</button>`;box.hidden=false});
$('#search-suggestions').addEventListener('click',e=>{const p=e.target.closest('[data-search-product]');const q=e.target.closest('[data-search-query]');$('#search-suggestions').hidden=true;if(p)navigate('/product/'+p.dataset.searchProduct);if(q)navigate('/search?q='+encodeURIComponent(q.dataset.searchQuery))});
$('#wishlist-btn').addEventListener('click',()=>navigate('/wishlist'));
$('#account-btn').addEventListener('click',()=>$('#account-modal').showModal());
$('#newsletter-form').addEventListener('submit',e=>{e.preventDefault();const input=$('#newsletter-email');if(input.reportValidity()){toast('Bedankt! Je staat op de GlowNest-lijst.');input.value=''}});
function openMenu(){$('#mobile-drawer').classList.add('open');$('#mobile-drawer').setAttribute('aria-hidden','false');$('#overlay').hidden=false;$('#mobile-menu-btn').setAttribute('aria-expanded','true')}
function closeMenu(){$('#mobile-drawer').classList.remove('open');$('#mobile-drawer').setAttribute('aria-hidden','true');$('#overlay').hidden=true;$('#mobile-menu-btn').setAttribute('aria-expanded','false')}
window.closeMenu=closeMenu;$('#mobile-menu-btn').addEventListener('click',openMenu);$('#mobile-close').addEventListener('click',closeMenu);$('#overlay').addEventListener('click',closeMenu);
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();$('#search-suggestions').hidden=true}});
updateCounts();render();