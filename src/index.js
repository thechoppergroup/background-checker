import Promise from 'promise-polyfill';

export default class BackgroundCheck {
    constructor($image, $content) {
        if ($image === undefined) {
            throw console.warn('Did not specify an image');
        }

        if ($content === undefined) {
            throw console.warn('No contenet container defined');
        }

        return new Promise((resolve, reject) => {
            try {
                ((cb) => {
                    if ($image.complete) {
                        cb($image, $content).then((brightness, res) => {
                            resolve(brightness, res)
                        })
                    } else {
                        $image.addEventListener('load', () => {
                            cb($image, $content).then((brightness, res) => {
                                resolve(brightness, res)
                            })
                        });
                    }
                })(this.check.bind(this));
            } catch (err) {
                reject(err)
            }
        })
    }

    check ($image, $content) {
        $image.setAttribute('crossorigin', '');

        return new Promise((resolve, reject) => {
            try {
                let imageBoundingRect = $image.getBoundingClientRect();
                let contentBoundingRect = $content.getBoundingClientRect();

                let contentLeft = (imageBoundingRect.left * -1) + contentBoundingRect.left;
                let contentTop = $content.offsetTop;
                let contentWidth = contentBoundingRect.width;
                let contentHeight = contentBoundingRect.height;

                let canvas = document.createElement('canvas');
                canvas.width = imageBoundingRect.width;
                canvas.height = imageBoundingRect.width;

                var ctx = canvas.getContext('2d');
                ctx.drawImage($image, 0, 0, imageBoundingRect.width, imageBoundingRect.height);
                var imageData = ctx.getImageData(contentLeft, contentTop, contentWidth, contentHeight);

                let res = {
                    imageData: imageData,
                    width: contentWidth,
                    height: contentHeight
                };

                let brightness = this.getBrightness(imageData.data, contentWidth, contentHeight);

                resolve(brightness, res);
            } catch (err) {
                reject(err)
            }
        })
        
    }

    getBrightness (data, width, height) {
        let colorSum = 0;

        for (let i = 0, len = data.length; i < len; i += 4) {
            let r = data[i];
            let g = data[i + 1];
            let b = data[i + 2];

            let avg = Math.floor((r + g + b) / 3);
            colorSum += avg;
        }

        return Math.floor(colorSum / (width * height));
    }
} 
