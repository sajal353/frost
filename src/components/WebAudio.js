export default class AudioVis {
    constructor(options) {
        this.track = options.track;

        this.audio = new Audio();
        this.audio.src = this.track;
        this.audio.load();
        this.audio.play();

        this.context = new AudioContext();
        this.src = this.context.createMediaElementSource(this.audio);
        this.analyser = this.context.createAnalyser();

        this.src.connect(this.analyser);
        this.analyser.connect(this.context.destination);
        this.analyser.fftSize = 32;

        this.bufferLength = this.analyser.frequencyBinCount;

        this.dataArray = new Uint8Array(this.bufferLength);

        this.amp = 0;

        this.render();

    }

    render() {
        this.analyser.getByteFrequencyData(this.dataArray);

        this.amp = ((this.dataArray[7] + this.dataArray[8]) / 2) / 1000;

        window.requestAnimationFrame(this.render.bind(this));
    }

}