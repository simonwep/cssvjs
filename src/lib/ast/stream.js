module.exports = vals => {
    const size = vals.length;
    const stashed = [];
    let index = 0;

    const stream = {
        stash: () => stashed.push(index),
        pop: () => index = stashed.pop(),

        next(includeWhitespace = false) {

            if (includeWhitespace && index < size) {
                return vals[index++];
            }

            for (let i = index; i < size; i++) {
                if (vals[i].type !== 'ws') {
                    index = i + 1;
                    return vals[i];
                }
            }

            return null;
        },

        peek(includeWhitespace = false) {

            if (includeWhitespace && index < size) {
                return vals[index];
            }

            for (let i = index; i < size; i++) {
                if (vals[i].type !== 'ws') {
                    return vals[i];
                }
            }

            return null;
        },

        hasNext(includeWhitespace = false) {
            return stream.peek(includeWhitespace) !== null;
        }
    };

    return stream;
};
