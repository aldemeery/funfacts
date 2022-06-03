const App = (function () {
    function App(facts) {
        this.rootElement = null;
        this.noFact = "Nothing to say ¯\\_(ツ)_/¯";
        this.facts = facts || [this.noFact];
        this.pickedFacts = [];
        this.resetFacts();
    }

    App.prototype.resetFacts = function () {
        this.facts = this.facts.concat(this.pickedFacts);
        this.pickedFacts = [];

        // Shuffle the facts ...
        let currentIndex = this.facts.length,  randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [
                this.facts[currentIndex],
                this.facts[randomIndex]
            ] = [
                this.facts[randomIndex],
                this.facts[currentIndex]
            ];
        }
    }

    App.prototype.nextFact = function () {
        if (this.facts.length == 0 && this.pickedFacts.length != 0) {
            this.resetFacts();
        }

        const fact = this.facts.shift() || this.noFact;
        this.pickedFacts.push(fact);

        return fact;
    }

    App.prototype.refresh = function () {
        const content = document.getElementById('fact');

        content.innerHTML = this.nextFact();
    }

    App.prototype.render = function () {
        const app = this;
        const html = `
            <div class="page">
                <div class="container">
                    <h1 id="fact" class="content"></h1>
                    <button id="refresh" class="refresh-btn">Refresh</button>
                </div>
            </div>
        `;

        this.rootElement.innerHTML = html;
    }

    App.prototype.registerListeners = function () {
        const app = this;
        document.getElementById('refresh').addEventListener('click', function () {
            app.refresh();
        });
    }

    App.prototype.mount = function (id) {
        this.rootElement = document.getElementById(id);
        this.render();
        this.registerListeners();
        this.refresh();
    }

    return App;
})();

const app = new App([
    "Your proudest atypical accomplishment ?",
    "Your most prized collection ?",
    "The first job you wanted when you were a little kid ?",
    "Something you were embarrassingly late to realize ?",
    "What your last meal on Earth would be ?",
    "The trip you most want to take, but haven’t yet ?",
    "Your favorite word ?",
    "Your most unusual pet ?",
    "The longest travel delay you’ve ever experienced ?",
    "A contest you once won ?",
    "Who did you look up to as a child ?",
    "What is your favourite hobby ?",
    "What is your favourite childhood memory ?",
    "Do you have any hidden talents ?",
    "What is the biggest risk you've taken ?",
    "What is the bravest thing you've ever done ?",
    "What do you want people to remember about you ?",
    "Do you collect anything ?",
    "What is your favourite place in the world ?",
    "If I could have any superpower, it would be ... ",
    "One thing I know I do well (or better than most) is ... ",
    "One thing I cannot live without is ... ",
    "My perfect day would start with ...  and end with ... ",
    "If I could live anywhere in the world, it would be ... ",
    "I volunteer at ... ",
    "I can’t stand it when ... ",
    "Celebrities who share your birthday ?",
    "The longest you have ever walked ?",
    "The farthest you've ever driven ?",
    "I’m allergic to ... ",
    "I’m most scared of ... ",
    "I can’t stand the sound of ... ",
    "I can speak ... languages",
    "I can cook the most amazing ... ",
    "How many languages do you speak?",
    "Does your name have a special meaning?",
]);
app.mount('app');