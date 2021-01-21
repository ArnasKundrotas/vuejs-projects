<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resources')" :mode="addResButtonMode">Add Resources</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
import StoredResources from './StoredResources';
import AddResources from './AddResource';


export default {
    components: {
        StoredResources,
        AddResources
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resources' ? null : 'flat';
        }
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                { id: 'offcial-guide', title: 'Official Guide', description: 'The official Vue doc', link: 'http://vuejs.org' },
                { id: 'google', title: 'Google', description: 'Learn to google...', link: 'http://google.com' }
            ]
        };
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.removeResource
        }
    },
    methods: {

        setSelectedTab(tab) {
            this.selectedTab = tab;
        },

        addResource(title, desc, url) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: desc,
                link: url
            }

            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },

        removeResource(resId) {
            // this.storedResources = this.storedResources.filter(res => res.id !== resId);
            const resIndex = this .storedResources.findIndex(res => res.id !== resId);
            this.storedResources.splice(resIndex);

        }

    }
}
</script>