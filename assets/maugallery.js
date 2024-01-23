!function(a){a.fn.mauGallery=function(b){var c=a.extend(a.fn.mauGallery.defaults,b),d=[];return this.each(function(){a.fn.mauGallery.methods.createRowWrapper(a(this)),c.lightBox&&a.fn.mauGallery.methods.createLightBox(a(this),c.lightboxId,c.navigation),a.fn.mauGallery.listeners(c),a(this).children(".gallery-item").each(function(){a.fn.mauGallery.methods.responsiveImageItem(a(this)),a.fn.mauGallery.methods.moveItemInRowWrapper(a(this)),a.fn.mauGallery.methods.wrapItemInColumn(a(this),c.columns);var b=a(this).data("gallery-tag");c.showTags&&void 0!==b&&-1===d.indexOf(b)&&d.push(b)}),c.showTags&&a.fn.mauGallery.methods.showItemTags(a(this),c.tagsPosition,d),a(this).fadeIn(500)})},a.fn.mauGallery.defaults={columns:3,lightBox:!0,lightboxId:null,showTags:!0,tagsPosition:"bottom",navigation:!0},a.fn.mauGallery.listeners=function(b){a(".gallery-item").on("click",function(){b.lightBox&&"IMG"===a(this).prop("tagName")&&a.fn.mauGallery.methods.openLightBox(a(this),b.lightboxId)}),a(".gallery").on("click",".nav-link",a.fn.mauGallery.methods.filterByTag),a(".gallery").on("click",".mg-prev",function(){a.fn.mauGallery.methods.prevImage(b.lightboxId)}),a(".gallery").on("click",".mg-next",function(){a.fn.mauGallery.methods.nextImage(b.lightboxId)})},a.fn.mauGallery.methods={createRowWrapper:function(b){b.children().first().hasClass("row")||b.append('<div class="gallery-items-row row"></div>')},wrapItemInColumn:function(b,c){c.constructor===Number?b.wrap("<div class='item-column mb-4 col-"+Math.ceil(12/c)+"'></div>"):c.constructor===Object?(d="",c.xs&&(d+=" col-"+Math.ceil(12/c.xs)),c.sm&&(d+=" col-sm-"+Math.ceil(12/c.sm)),c.md&&(d+=" col-md-"+Math.ceil(12/c.md)),c.lg&&(d+=" col-lg-"+Math.ceil(12/c.lg)),c.xl&&(d+=" col-xl-"+Math.ceil(12/c.xl)),b.wrap("<div class='item-column mb-4"+d+"'></div>")):console.error("Columns should be defined as numbers or objects. "+typeof c+" is not supported.")},moveItemInRowWrapper:function(b){b.appendTo(".gallery-items-row")},responsiveImageItem:function(b){"IMG"===b.prop("tagName")&&b.addClass("img-fluid")},openLightBox:function(b,c){a("#"+(c?c:"galleryLightbox")).find(".lightboxImage").attr("src",b.attr("src")),a("#"+(c?c:"galleryLightbox")).modal("toggle")},prevImage:function(){var b=null;a("img.gallery-item").each(function(){a(this).attr("src")===a(".lightboxImage").attr("src")&&(b=a(this))});var c=a(".tags-bar span.active-tag").data("images-toggle"),d=[];"all"===c?a(".item-column").each(function(){a(this).children("img").length&&d.push(a(this).children("img"))}):a(".item-column").each(function(){a(this).children("img").data("gallery-tag")===c&&d.push(a(this).children("img"))});var e=0,f=null;a(d).each(function(a){b.attr("src")===this.attr("src")&&(e=a-1)}),f=d[e]||d[d.length-1],a(".lightboxImage").attr("src",f.attr("src"))},nextImage:function(){var b=null;a("img.gallery-item").each(function(){a(this).attr("src")===a(".lightboxImage").attr("src")&&(b=a(this))});var c=a(".tags-bar span.active-tag").data("images-toggle"),d=[];"all"===c?a(".item-column").each(function(){a(this).children("img").length&&d.push(a(this).children("img"))}):a(".item-column").each(function(){a(this).children("img").data("gallery-tag")===c&&d.push(a(this).children("img"))});var e=0,f=null;a(d).each(function(a){b.attr("src")===this.attr("src")&&(e=a+1)}),f=d[e]||d[0],a(".lightboxImage").attr("src",f.attr("src"))},createLightBox:function(b,c,d){b.append("<div class='modal fade' id='"+(c?c:"galleryLightbox")+"' tabindex='-1' role='dialog' aria-hidden='true'><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-body'>"+(d?"<div class='mg-prev' style='cursor:pointer;position:absolute;top:50%;left:-15px;background:white;'><</div>":"<span style='display:none;' />")+"<img class='lightboxImage img-fluid' alt='Contenu de l'image affichée dans la modale au clique'/>"+(d?"<div class='mg-next' style='cursor:pointer;position:absolute;top:50%;right:-15px;background:white;}'>></div>":"<span style='display:none;' />")+"</div></div></div></div>")},showItemTags:function(b,c,d){for(var e="<li class='nav-item'><span class='nav-link active active-tag'  data-images-toggle='all'>Tous</span></li>",f=0;f<d.length;f++)e+="<li class='nav-item active'><span class='nav-link'  data-images-toggle='"+d[f]+"'>"+d[f]+"</span></li>";var g="<ul class='my-4 tags-bar nav nav-pills'>"+e+"</ul>";"bottom"===c?b.append(g):"top"===c?b.prepend(g):console.error("Unknown tags position: "+c)},filterByTag:function(){if(!a(this).hasClass("active-tag")){a(".active-tag").removeClass("active active-tag"),a(this).addClass("active active-tag");var b=a(this).data("images-toggle");a(".gallery-item").each(function(){a(this).parents(".item-column").hide(),"all"===b?a(this).parents(".item-column").show(300):a(this).data("gallery-tag")===b&&a(this).parents(".item-column").show(300)})}}}})(jQuery);
