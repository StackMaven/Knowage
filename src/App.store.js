import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            user: {},
            error: {},
            info: {},
            warning: {},
            downloads: { count: { total: 0, unRead: 0 } },
            locale: {},
            news: { count: { total: 0, unRead: 0 } },
            loading: false,
            homePage: {},
            internationalization: [],
            isEnterprise: false,
            licenses: {
                hosts: [],
                licenses: {},
                cpuNumber: -1
            }
        }
    },
    actions: {
        initializeUser(context, user) {
            context.commit('setUser', user)
            context.commit('setEnterprise', user.enterprise)
        },

        updateLicense(context, el) {
            let licenses = context.state.licenses

            let hostNameLicenses = licenses.licenses[el.hostName]

            let existingLicense = hostNameLicenses.filter((x) => x.product === el.license.product)

            if (existingLicense.length == 1) {
                hostNameLicenses.splice(existingLicense, 1)
            }

            hostNameLicenses.push(el.license)

            context.commit('setLicenses', licenses)
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setUserSessionRole(state, sessionRole) {
            state.user.sessionRole = sessionRole
        },
        setError(state, error) {
            state.error = error
        },
        setInfo(state, info) {
            state.info = info
        },
        setLoading(state, loading) {
            state.loading = loading
        },
        setWarning(state, warning) {
            state.warning = warning
        },
        setLocale(state, locale) {
            state.locale = locale
        },
        setDownloads(state, hasDownload) {
            state.downloads = hasDownload
        },
        updateAlreadyDownloadedFiles(state) {
            if (state.downloads.count.total > state.downloads.count.alreadyDownloaded) state.downloads.count.alreadyDownloaded++
        },
        setNews(state, hasNews) {
            state.news = hasNews
        },
        setHomePage(state, homePage) {
            state.homePage = homePage
        },
        setInternationalization(state, internationalization) {
            state.internationalization = internationalization
        },
        setLicenses(state, licenses) {
            state.licenses = licenses
        },
        setEnterprise(state, enterprise) {
            state.isEnterprise = enterprise
        }
    }
})

export default store
