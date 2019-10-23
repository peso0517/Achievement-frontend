<template>
  <div id="format">
    <div class="title">マスターキーフォーマット作成</div>
    <b-container class="bv-example-row" fluid>
        <div class="memo-title">◾️メモ欄</div>
        <div class="table-wrapper">
            <table class="table table-bordered sticky_table">
                <thead class="thead-dark">
	                <tr>
                        <th>No.</th>
			            <th>X</th>
			            <th>◯</th>
			            <th>?</th>
		    	        <th>エピソード</th>
		            </tr>
	            </thead>
	            <tbody class="table-info table-body">
		            <tr class="aa" v-for="(memo) in memos" :key="memo.id">
                        <td class="column-title-no">{{ memo.id }}
		           	    <td class="column-title-content">{{ memo.bad }}</td>
		                <td class="column-title-content">{{ memo.good }}</td>
		        	    <td class="column-title-content">{{ memo.question }}</td>
		        	    <td class="column-title-content">{{ memo.episode }}</td>
		    	        <!-- <td><input type="text" class="form-control"></td>
		    	        <td><button class="btn btn-danger" v-on:click="deleteRow(index)">削除</button></td>-->
		            </tr>
	            </tbody>
            </table>
        </div>
        <div>
          <b-card>
            <b-tabs content-class="mt-3 tab">
                <b-tab title="本名称入力">
                    <div class="book-title">本名称：
                        <span class="book-name" v-if="book_title!==''">{{ book_title }}</span>
                        <span class="book-no-name" v-else>【未入力】</span>
                    </div>
                    <div class="input_name">
                        <b-form-input v-model="book_title" placeholder="Please Enter BookName" required autofocus trim></b-form-input>
                    </div>
                </b-tab>
                <b-tab title="メモ欄追加" active>
                    <div class="add_content">
                        <b-form-group>
                            <b-form-radio-group
                                id="radio-group-1"
                                v-model="selected_memo"
                                :options="options"
                                name="radio-options"
                                b-form-radio-group
                            />
                        </b-form-group>
                        <b-form-textarea
                            id="textarea"
                            v-model="text"
                            placeholder="Please Select button And Enter Text..."
                            rows="2"
                            max-rows="4"
                            class="textarea_field"
                        />
                    </div>
                    <div class="button_field">
                        <b-button variant="outline-primary" size="sm" pill>追加</b-button>
                    </div>
                </b-tab>
                <b-tab title="マスターキー入力">
                    <div class="master_key">
                        <b-form-textarea
                            id="textarea"
                            v-model="summary"
                            placeholder="Please Enter MasterKey..."
                            rows="3"
                            max-rows="6"
                            class="textarea_field"
                        />
                    </div>
                </b-tab>
                <b-tab title="ユーザー設定">
                    <div class="button_field">
                        <b-form-select v-model="selected_user" :options="options"></b-form-select>
                    </div>
                </b-tab>
                <b-tab title="完了">
                    <div class="button_field">
                        <b-button variant="success" @click="submit_master">マスターキーフォーマットの作成を完了する</b-button>
                    </div>
                </b-tab>

            </b-tabs>
          </b-card>
        </div>    
        </b-container>
    </div>
</template>
<script>
import createFormat from '../../api/format/index.js'

export default {
    data: function () {
        return {
            summary: '',
            book_title: 'dd',
            memos: [
                {id: 1,bad : 'aaaaaaa', good: 'Yamada', question: 'あいうえお', episode: 'ssssss'},
                {id: 2,bad : 'bbbbbbb', good: 'Yamamoto', question: 'かきくけこ', episode: 'eeeeeee'},
                {id: 3,bad : 'aaaaaaa', good: 'Yamada', question: 'あいうえお', episode: 'ssssss'},
                {id: 4,bad : 'aaaaaaa', good: 'Yamada', question: 'あいうえお', episode: 'ssssss'},
                {id: 5,bad : 'aaaaaaa', good: 'Yamada', question: 'あいうえお', episode: 'ssssss'},
                {id: 6,bad : 'aaaaaaa', good: 'Yamada', question: 'あいうえお', episode: 'ssssss'},
                {id: 7,bad : 'aaaaaaa', good: 'Yamada', question: 'あいうえお', episode: 'ssssss'},
                {id: 8,bad : 'aaaaaaa', good: 'Yamada', question: 'あいうえお', episode: 'ssssss'},
                {id: 9,bad : 'aaaaaaa', good: 'Yamada', question: 'あいうえお', episode: 'ssssss'}
            ],
            selected_memo: 'first',
            selected_user: null,
            options: [
              { text: 'x', value: 'first' },
              { text: '○', value: 'second' },
              { text: '?', value: 'third' },
              { text: 'エピソード', value:  'fourth' }
            ],
            text: ''
        }
    },
    methods: {
        submit_master () {
            createFormat(this.book_title).then(res => {
                console.log(res)    
            }).catch((e) => {
                console.log(e)
            })
        }
    }
}
</script>

<style scoped>
#format {
    color: #282c37;
}
.title {
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    margin: 1rem 0;
    text-decoration: underline;
}

.book-title {
    font-weight: bold;
    padding-bottom: 1rem;
}

.book-name {
    color: green;
}

.book-no-name {
    color: red;
}

.memo-title {
    font-weight: bold;
    padding-bottom: .3rem;
}

.content_title {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: .5rem;
}

.input_name {
    margin-bottom: 1rem;
}
.table-wrapper {
    overflow: scroll;
    height: 42vh;
    margin-bottom: 1rem;
    clear: both;
}

.table {
    margin-bottom: 0px;
}

.sticky_table thead th {
    text-align: center;
    border-color: #d6d8db;
    /* 縦スクロール時に固定する */
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    /* tbody内のセルより手前に表示する */
    z-index: 1;
}
.table-bordered {
    border: solid 1px black;
}
.column-title-no {
    text-align: center;
    width: 1rem;
}
.column-title-content td {
    width: 24rem;
}
.textarea_field{
    margin-bottom: 1rem;
}
.button_field {
    text-align: center;
    margin-bottom: 1rem;
}
#format .nav-tabs .nav-link.active {
    background-color: yellow;
}
</style>
<style>
#format .mt-3 {
    padding-top: 1rem;
}
</style>