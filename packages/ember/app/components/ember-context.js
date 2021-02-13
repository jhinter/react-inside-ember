import Component from '@glimmer/component';
import { action } from '@ember/object';
export default class EmberContextComponent extends Component {

    @action
    listener(e) {
        // coloring ember body
        const newColor = getRandomColor();
        document.body.style.backgroundColor = newColor;

        // passing color value to react context via props
        const webcomponent = e.target;
        webcomponent.color = newColor;
    }
  
    @action
    registerListener(element) {
      element.addEventListener('example-event-from-react', this.listener);
    }
  
    @action
    unregisterListener(element) {
      element.removeEventListener('example-event-from-react', this.listener);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  
