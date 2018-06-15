import _ from "lodash";

function collect(collection) {
    let modified = collection;
    let profiling = false;

    return {
        get: () => modified,
        count: () => modified.length,
        initial: collection,
        contains: (what) => (modified.indexOf(what) !== -1),
        toJSON: () => (JSON.stringify(modified)),
        isArray: () => Array.isArray(modified),
        profile() {
            if(profiling) {
                profiling = false;
                console.timeEnd("Profiling");
            } else {
                profiling = true;
                console.time("Profiling");
            }

            return this;
        },
        log() {
            console.log(modified);
            return this;
        },
        first() {
            modified = modified[Object.keys(modified)[0]];
            return this;
        },
        flatten() {
            modified = _.flatten(modified);
            return this;
        },
        sort(how) {
            modified = modified.sort(how);
            return this;
        },
        sortAscBy(key) {
            modified = modified.sort((a, b) => (a[key] > b[key]));
            return this;
        },
        sortDescBy(key) {
            modified = modified.sort((a, b) => (a[key] < b[key]));
            return this;
        },
        filter(how) {
            modified = modified.filter(how);
            return this;
        },
        concat(what) {
            modified = modified.concat(what);
            return this;
        },
        find(what) {
            modified = _.find(modified, what);
            return this;
        },
        findKey(what) {
            modified = _.findKey(modified, what);
            return this;
        },
        diff(what) {
            modified = _.difference(modified, what);
            return this;
        },
        map(how) {
            modified = modified.map(how);
            return this;
        },
        reduce: (how) => modified.reduce(how),
        except(what = []) {
            let wasObject = false;
            if(!this.isArray()) {
                modified = [modified];
                wasObject = true;
            }

            modified = modified.map((item, i) => {
                for (let key of what) {
                    delete item[key];
                }
                return item;
            });

            if(wasObject) modified = modified[0];

            return this;
        },
        some(what) {
            if (!this.isArray()) {
                throw new Error("Current collection is not an array");
            } else {
                modified = modified.some(what);
            }
            return this;
        },
        chunk(count) {
            modified = _.chunk(modified, count);
            return this;
        }
    };
}

export default collect;