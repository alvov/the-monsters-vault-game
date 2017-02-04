/**
 * Stores an array of actions that should be dispatched at a certain time
 */
export default class DelayedActions {
    constructor() {
        this.delayedActions = [];
    }

    /**
     * Returns an array of actions, that are to be dispatched
     * @returns {Array}
     */
    getActualActions() {
        const now = Date.now();
        let actualActions = [];
        let delayedActions = [];
        for (let i = 0; i < this.delayedActions.length; i++) {
            if (this.delayedActions[i].timestamp <= now) {
                actualActions.push(this.delayedActions[i].action);
            } else {
                delayedActions.push(this.delayedActions[i]);
            }
        }
        this.delayedActions = delayedActions;
        return actualActions;
    }

    /**
     * Adds a delayed action to the list
     * @param {Object} action
     * @param {number} delay
     */
    pushAction({ action, delay }) {
        this.delayedActions.push({
            action,
            timestamp: Date.now() + delay
        })
    }

    /**
     * Clears delayed actions list
     */
    clear() {
        this.delayedActions = [];
    }
}
