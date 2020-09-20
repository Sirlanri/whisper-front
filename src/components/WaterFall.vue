<template>
	<v-row>
		<v-col lg="2" class="d-none d-lg-flex"></v-col>

		<v-col lg="3" md="5" sm="6" cols="10" offset="1" offset-sm="0" offset-md="1" offset-lg="0">
			<div class="flex-column" v-for="(card,index) in cards1" :key="index">
        
        <card
          v-on:tagname="openTag"
          :time="card.time"
          :avatar="card.avatar"
          :postid="card.id"
          :username="card.username"
          :groupname="card.groupname"
          :pics="card.pics"
          :groupid="card.groupid"
          :content="card.content"
          :topics="card.topic"
          :replays="card.replys"
        ></card>
			</div>
      <v-skeleton-loader
        max-width="400"
        type="list-item-avatar, divider, list-item-three-line">
      </v-skeleton-loader>
      <v-lazy v-model="isMore" transition="fade-transition"
        ref="lazy"></v-lazy>
      
		</v-col>
    
		<v-col lg="3" md="5" sm="6" class="hidden-xs-and-down">
			<div class="flex-column" v-for="(card,index) in cards2" :key="index">
				<card
					v-on:tagname="openTag"
					:time="card.time"
					:avatar="card.avatar"
					:postid="card.id"
					:username="card.username"
					:groupname="card.groupname"
					:pics="card.pics"
					:groupid="card.groupid"
					:content="card.content"
					:topics="card.topic"
					:replays="card.replys"
				></card>
			</div>
      <v-skeleton-loader
        max-width="400"
        type="list-item-avatar, divider, list-item-three-line">
      </v-skeleton-loader>
      <v-lazy v-model="isMore" transition="fade-transition"
        ref="lazy"></v-lazy>
      
		</v-col>
		<v-col lg="3" md="0" class="hidden-md-and-down">
			<div class="flex-column" v-for="(card,index) in cards3" :key="index">
				<card
					v-on:tagname="openTag"
					:time="card.time"
					:avatar="card.avatar"
					:postid="card.id"
					:username="card.username"
					:groupname="card.groupname"
					:pics="card.pics"
					:groupid="card.groupid"
					:content="card.content"
					:topics="card.topic"
					:replays="card.replys"
				></card>
			</div>
      <v-skeleton-loader
        max-width="400"
        type="list-item-avatar, divider, list-item-three-line">
      </v-skeleton-loader>
      <v-lazy v-model="isMore" transition="fade-transition"
        ref="lazy"></v-lazy>
        
      
		</v-col>
    
	</v-row>
</template>

<script>
import card from "@/components/Card.vue";
export default {
	components: {
		card,
	},
	props: {
    cardsData: Array,
	},
	data() {
		return {
			cards1: [],
			cards2: [],
			cards3: [],
      screenWidth: 1800,
      isMore:false,
      index:20,
      countFlag:0,
		};
	},
	methods: {
		//card组件点击tag后，显示此tag的全部推文
		openTag(tagname) {
			console.log("这个功能还没做哦~ ",tagname);
		},
		//将数据均匀地分到3列
		shunt3() {
			this.cards1 = [];
			this.cards2 = [];
			this.cards3 = [];
			if (this.cardsData == undefined) {
				return;
			}
			var len = this.cardsData.length;
			for (let index = 0; index < len / 3; index++) {
				this.cards1.push(this.cardsData[index * 3]);
				if (index * 3 + 1 < len) {
					this.cards2.push(this.cardsData[index * 3 + 1]);
					if (index * 3 + 2 < len) {
						this.cards3.push(this.cardsData[index * 3 + 2]);
					} else {
						break;
					}
				} else {
					break;
				}
			}
		},
		//将数据均匀地分到2列
		shunt2() {
			this.cards1 = [];
			this.cards2 = [];
			this.cards3 = [];
			var count2 = 1;
			this.cardsData.forEach((element) => {
				if (count2 % 2 == 0) {
					this.cards1.push(element);
					count2++;
				} else {
					this.cards2.push(element);
					count2++;
				}
			});
			//this.$store.commit("closeDrawer");
		},
		//只分到一列
		shunt1() {
			this.cards2 = [];
			this.cards3 = [];
			this.cards1 = this.cardsData;
			//this.$store.commit("closeDrawer");
		},
		
	},
	mounted() {
		const that = this;
		window.onresize = () => {
			return (() => {
				window.screenWidth = document.body.clientWidth;
				that.screenWidth = window.screenWidth;
			})();
		};
		
  },
  
	created() {
    
  },
	watch: {
		cardsData: function () {
			if (this.screenWidth >= 1264) {
				this.shunt3();
				return;
			}
			if (this.screenWidth <= 600) {
				this.shunt1();
				return;
			} else {
				this.shunt2();
			}
		},
		screenWidth: function () {
			if (this.screenWidth >= 1264) {
				this.shunt3();
				return;
			}
			if (this.screenWidth <= 600) {
				this.shunt1();
				return;
			} else {
				this.shunt2();
			}
    },
    isMore:function(value){
      if (value==true) {
        if (this.countFlag<3) {
          //改变v-lazy的data
          this.countFlag+=1
          this.isMore=false
          this.$refs.lazy.isActive=false
          return
        }
        this.$emit("moreData",this.index)
        this.isMore=false
        //改变v-lazy的data
        this.$refs.lazy.isActive=false
        this.index+=20
        
      }
    }
	},
	computed: {
		
  },
  //防止组件复用造成冲突，离开页面后就还原数据
  destroyed(){
    console.log('调用销毁函数')
    this.index=20
    this.countFlag=0
    this.isMore=false
  }
};
</script>

<style>
</style>