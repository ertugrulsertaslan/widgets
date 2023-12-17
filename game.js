let size = 1;
let graphics;
let curves = [];
let curve = null;
let brushcolor = "#dddddd";

function calculateAverage(array) {
	var total = 0;
	var count = 0;

	array.forEach(function(item, index) {
		total += item;
		count++;
	});

	return total / count;
}

function getDistance(x1, y1, x2, y2) {
	let y = x2 - x1;
	let x = y2 - y1;
	return Math.sqrt(x * x + y * y);
}

function percentageChange(x, y) {
	const diff = y-x;
  
	return (diff / x) * 100;
  }
  

class Example extends Phaser.Scene {
	preload () {

	}
	create () {
		let distance = size;
		let lastPosition = new Phaser.Math.Vector2();
		let current = null;
		let previous = null;
		let circlePoints = [];
		let circleDiameter = 0;
		graphics = null;
		

		const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
		const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

		const r1 = this.add.circle(screenCenterX, screenCenterY, 2, 0xffffff);
		const perfectionText = this.add.text(screenCenterX+4,screenCenterY-2,"").setOrigin(0.5);

		this.input.on('pointerdown', (pointer) => {
			lastPosition.x = pointer.x;
			lastPosition.y = pointer.y;
			curve = new Phaser.Curves.Spline([ pointer.x, pointer.y ]);
			curves.push(curve);

			if (graphics) {
				graphics.destroy();
			}
			graphics = this.add.graphics();
			graphics.setDepth(1);

			circleDiameter = getDistance(pointer.x, pointer.y, screenCenterX, screenCenterY);        
		});
		this.input.on('pointermove', function (pointer) {
			if (pointer.isDown)
			{
				let x = pointer.x;
				let y = pointer.y;

				if (Phaser.Math.Distance.Between(x, y, lastPosition.x, lastPosition.y) > distance)
				{
					
					lastPosition.x = x;
					lastPosition.y = y;
					previous = current;
					curve.addPoint(x, y);
					graphics.lineStyle(size * 1.5, brushcolor.replace("#", "0x"));
					curves.forEach(function(c) {
						c.draw(graphics, 512);
					});
					const distance = getDistance(pointer.x, pointer.y, screenCenterX, screenCenterY);
					const difference = Math.abs(circleDiameter-distance) * 1.5;
					circlePoints.push(difference);
					const average = calculateAverage(circlePoints);
					let perfection =  Math.abs(percentageChange(circleDiameter, average));
					perfection = perfection.toFixed(2);
					perfectionText.setText(perfection+"%");
					
				}
			}

		}, this);
		this.input.on('pointerup', function (pointer){
			graphics.save();
			curves = [];
			curve = null;
			circlePoints = [];
		}, this);    
	}
	update () {
	}
}

const config = {
	type: Phaser.AUTO,
	width: '100%',
	height: '100%',
	scene: Example,
	parent: "game"
};

const game = new Phaser.Game(config);
