(function () {
	
	var rotator = {
		itemsPerPage: 8,
		originalItems: {},
		currentPage: 0,

		init: function() {
			this.originalItems = $('#blog .blog-item');

			$('.newer').on('click', $.proxy(this.newer, this));
			$('.older').on('click', $.proxy(this.older, this));

			this.show();
		},

		clear: function () {
			$('.blog-data > .posts').empty();
		},

		show : function () {
			this.clear();
			this.setControllersVisibility();

			var counter = 0;

			for (var i = this.currentPage*this.itemsPerPage; i < this.originalItems.length; i++) {
				$('.blog-data > .posts').append(this.originalItems[i]);
				counter++;

				if(counter >= this.itemsPerPage) {
					break;
				}			
			}

		},

		setControllersVisibility : function () {
			$('.newer, .older').removeClass('semi-hide');

			if (this.currentPage === 0) {
				$('.newer').addClass('semi-hide');
			}

			if (this.currentPage === Math.floor(this.originalItems.length / this.itemsPerPage)) {
				$('.older').addClass('semi-hide');	
			}

		},

		newer: function () {
			if(this.currentPage > 0) {
				this.currentPage--;			
				this.show();
			}
		},

		older: function () {
			if(this.currentPage < Math.floor(this.originalItems.length / this.itemsPerPage) ) {
				this.currentPage++;
				this.show();
			}
		}
	}

	$(document).ready(function () {
		rotator.init();
	});
})();