import algolia from 'algoliasearch'
import autocomplete from 'autocomplete.js'

var index = algolia('WR6G91UWIS', '37cf2fb36e676fe27a5f34ab9b4d067b')

export const userautocomplete = selector => {
    var users = index.initIndex('users')

    return autocomplete(selector, {}, {
        source: autocomplete.sources.hits(users, { hitsPerPage: 10 }),
        displayKey: 'name',
        templates: {
            suggestion (suggestion) {
                return '<span>' + suggestion.name + '</span>'
            },
            empty: '<div class="aa-empty">No people found.</div>'
        }
    })
}
