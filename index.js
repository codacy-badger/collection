import _ from 'lodash';

function collect(collection) {
    let modified = collection;
    let profiling = false;

    return {
        get: () => modified,
        count: () => modified.length,
        initial: () => collection,
        contains: (what) => (modified.indexOf(what) !== -1),
        toJSON: () => (JSON.stringify(modified)),
        isArray: () => Array.isArray(modified),
        profile: function () {
            if(profiling) {
                profiling = false;
                console.timeEnd('Profiling');
            } else {
                profiling = true;
                console.time('Profiling');
            }

            return this;
        },
        log: function () {
            console.log(modified);
            return this;
        },
        first: function () {
            modified = modified[Object.keys(modified)[0]];
            return this;
        },
        flatten: function () {
            modified = _.flatten(modified);
            return this;
        },
        sort: function (how) {
            modified = modified.sort(how);
            return this;
        },
        sortAscBy: function (key) {
            modified = modified.sort((a, b) => (a[key] > b[key]));
            return this;
        },
        sortDescBy: function (key) {
            modified = modified.sort((a, b) => (a[key] < b[key]));
            return this;
        },
        filter: function (how) {
            modified = modified.filter(how);
            return this;
        },
        concat: function (what) {
            modified = modified.concat(what);
            return this;
        },
        find: function (what) {
            modified = _.find(modified, what);
            return this;
        },
        findKey: function (what) {
            modified = _.findKey(modified, what);
            return this;
        },
        diff: function (what) {
            modified = _.difference(modified, what);
            return this;
        },
        map: function (how) {
            modified = modified.map(how);
            return this;
        },
        reduce: how => modified.reduce(how),
        except: function (what = []) {
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
            })

            if(wasObject) modified = modified[0]

            return this;
        },
        some: function (what) {
            if (!this.isArray()) {
                throw new Error('Current collection is not an array');
                return this;
            }
            modified = modified.some(what);
            return this;
        },
        chunk: function(count) {
            modified = _.chunk(modified, count);
            return this;
        }
    }
}

//collect([1, 2, 3, 4, 5])

export default collect;